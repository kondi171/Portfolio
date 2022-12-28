import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../flow/AppContext';

const Projects = ({ projectsImages }) => {
    const constantTime = 9;
    const { projectsData } = useContext(AppContext);

    const navigate = useNavigate();
    const [activeProjectChanged, setActiveProjectChanged] = useState(false);
    const [activePhoto, setActivePhoto] = useState(0);
    const [activeProject, setActiveProject] = useState({});
    const [timeToChange, setTimeToChange] = useState(constantTime);
    const [cleanUpTimeOuts, setCleanUpTimeOuts] = useState({
        fadeTimeout: null,
        unfadeTimeout: null,
        transitionTimeout: null,
        translateLeftInterval: null,
        translateRightInterval: null
    });

    const handleActiveMiniature = e => {
        const carusselImgs = document.querySelectorAll('.project-miniature');
        carusselImgs.forEach(img => img.classList.remove('active'));
        const id = e.target.parentNode.dataset.id;
        const name = e.target.parentNode.dataset.name;
        const content = e.target.parentNode.dataset.content;
        const activeMiniature = e.target.parentNode;
        activeMiniature.classList.add('active');
        const selectActiveImagesObject = projectsImages.filter(activeImagesObject => activeImagesObject.id === id);
        const activeImages = selectActiveImagesObject.map(activeImages => activeImages.img);
        setActiveProject({
            id: id,
            name: name,
            content: content,
            images: activeImages[0]
        });
        setActiveProjectChanged(true);
    }

    const translateLeft = () => {
        let counter = 0;
        const carussel = document.querySelectorAll('.project-miniature');
        setInterval(() => {
            counter += 10;
            carussel.forEach(project => {
                project.style.transitionDuration = '.5s';
                project.style.transform = `translateX(${counter}px)`;

            });
        }, 100);
        // console.log("enter");
        // setCleanUpTimeOuts(...cleanUpTimeOuts, { translateLeftInterval: leftTranslateInterval });
    }
    const stopTranslateLeft = () => {
        clearInterval(cleanUpTimeOuts.translateLeftInterval);
        console.log("left");

    }
    useEffect(() => {
        if (Object.keys(projectsData).length !== 0 && !activeProjectChanged) {
            setActiveProject({
                id: "BlockBall",
                name: "Block Ball",
                content: projectsData.projects[0].representation[0].content,
                images: [...projectsImages[0].img]
            });
        }
    }, [projectsData]);


    useEffect(() => {
        const review = document.querySelector('.projects__large-project');
        const transitionDuration = parseFloat(getComputedStyle(review).transitionDuration) * 1000;
        const unfadeTimeout = setTimeout(() => {
            review.classList.add('fade');
        }, constantTime * 1000 - transitionDuration);
        const fadeTimeout = setTimeout(() => {
            if (activePhoto === 2) setActivePhoto(0);
            else setActivePhoto(activePhoto + 1);
        }, constantTime * 1000);
        const transitionTimeout = setTimeout(() => {
            review.classList.remove('fade');
        }, constantTime * 1000 + transitionDuration);
        setCleanUpTimeOuts({
            fadeTimeout: fadeTimeout,
            unfadeTimeout: unfadeTimeout,
            transitionTimeout: transitionTimeout
        });
    }, [activePhoto]);

    useEffect(() => {
        const changeTimeout = setTimeout(() => {
            if (timeToChange === 1) setTimeToChange(constantTime);
            else setTimeToChange(timeToChange - 1);
        }, 1000);
        return () => clearTimeout(changeTimeout);
    }, [timeToChange]);

    useEffect(() => {
        return () => {
            clearInterval(cleanUpTimeOuts.fadeTimeout);
            clearInterval(cleanUpTimeOuts.unfadeTimeout);
            clearInterval(cleanUpTimeOuts.transitionTimeout);
        }
    }, []);

    return (
        <section id="projects" className="projects">
            <h2>{projectsData?.title}</h2>
            <div className="projects__large-project">
                {Object.keys(activeProject).length !== 0 &&
                    <img src={activeProject?.images[activePhoto]} alt={`${activeProject?.name} project`} />}
                <div className="img-layer">
                    <h3 className='project-name'>{activeProject.name}</h3>
                    <span>{activeProject.content}</span>
                    <button onClick={() => navigate(`/project/${activeProject.id}`, { state: { id: activeProject.id, images: projectsImages } })} className="project-btn">{projectsData?.button}</button>
                </div>
                <span className='change-time-info'>{timeToChange}</span>
            </div>
            <div className="projects__carussel">
                {projectsData?.projects?.map((miniature, index) => {
                    const { id, name, representation } = miniature;
                    return <div key={id} data-id={id} data-name={name} data-content={representation[0].content} onClick={e => handleActiveMiniature(e)} className="project-miniature">
                        <img src={projectsImages[index].img[0]} alt={`Miniature of ${name} project`} />
                        {/* <h4>{name}</h4> */}
                    </div>
                })}
            </div>
        </section>
    );
}
export default Projects;
