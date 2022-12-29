import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../flow/AppContext';

const Projects = ({ projectsImages }) => {
    const constantTime = 9;
    const { projectsData, setIsThemeChanged } = useContext(AppContext);

    const navigate = useNavigate();
    const [activeProjectChanged, setActiveProjectChanged] = useState(false);
    const [activePhoto, setActivePhoto] = useState(0);
    const [activeProject, setActiveProject] = useState({});
    const [timeToChange, setTimeToChange] = useState(constantTime);
    const [translateXAxisValue, setTranslateXAxisValue] = useState(0);
    const [desktopLayout, setDesktopLayout] = useState(false);
    const [cleanUpTimeOuts, setCleanUpTimeOuts] = useState({
        fadeTimeout: null,
        unfadeTimeout: null,
        transitionTimeout: null,
        translateLeftInterval: null,
        translateRightInterval: null
    });
    const checkPageWidth = () => {
        const body = document.body;
        const html = document.documentElement;
        const width = Math.max(body.getBoundingClientRect().width, html.getBoundingClientRect().width);
        if (width >= 1024) setDesktopLayout(true);
        else setDesktopLayout(false);
    }
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
        const rightArrow = document.querySelector('.fa-angle-double-right');
        const leftArrow = document.querySelector('.fa-angle-double-left');
        rightArrow.classList.remove('inactive');
        if (translateXAxisValue >= 0) return;
        if (translateXAxisValue === -25) leftArrow.classList.add('inactive');
        setTranslateXAxisValue(translateXAxisValue + 25);
    }
    const translateRight = () => {
        const rightArrow = document.querySelector('.fa-angle-double-right');
        const leftArrow = document.querySelector('.fa-angle-double-left');
        leftArrow.classList.remove('inactive')
        const maxRightTranslate = (projectsData.projects.length - 3) * -25;
        if (translateXAxisValue <= maxRightTranslate) return;
        if (translateXAxisValue === maxRightTranslate + 25) rightArrow.classList.add('inactive');
        setTranslateXAxisValue(translateXAxisValue - 25);
    }
    const redirectToProject = () => {
        navigate(`/project/${activeProject.id}`, { state: { id: activeProject.id, images: projectsImages } });
        setIsThemeChanged(false);
    }
    useEffect(() => {
        const carussel = document.querySelector('.carussel__content');
        carussel.style.transform = `translateX(${translateXAxisValue}%)`;
    }, [translateXAxisValue]);

    useEffect(() => {
        checkPageWidth();
        if (Object.keys(projectsData).length !== 0 && !activeProjectChanged) {
            setActiveProject({
                id: "LazyTaste",
                name: "Lazy Taste",
                content: projectsData.projects[4].representation[0].content,
                images: [...projectsImages[4].img]
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
            <div className="desktop-layout">
                <div className="projects__large-project">
                    {Object.keys(activeProject).length !== 0 &&
                        <img src={activeProject?.images[activePhoto]} alt={`${activeProject?.name} project`} />}
                    <div className="img-layer">
                        <h3 className='project-name'>{activeProject.name}</h3>
                        <span>{Object.keys(activeProject).length !== 0 && `${activeProject?.content.slice(0, 150)}...`}</span>
                        <button onClick={redirectToProject} className="project-btn">{projectsData?.button}</button>
                    </div>
                    <span className='change-time-info'>{timeToChange}</span>
                </div>
                <div className="projects__carussel">
                    {!desktopLayout && <i className="fa fa-angle-double-left inactive" onClick={translateLeft} aria-hidden="true"></i>}
                    <div className="carussel__content">
                        {projectsData?.projects?.map((miniature, index) => {
                            const { id, name, representation } = miniature;
                            if (index === 4) return <div key={id} data-id={id} data-name={name} data-content={representation[0].content} onClick={e => handleActiveMiniature(e)} className="project-miniature active">
                                <img src={projectsImages[index].img[0]} alt={`Miniature of ${name} project`} />
                                <h4>{name}</h4>
                            </div>
                            else return <div key={id} data-id={id} data-name={name} data-content={representation[0].content} onClick={e => handleActiveMiniature(e)} className="project-miniature">
                                <img src={projectsImages[index].img[0]} alt={`Miniature of ${name} project`} />
                                <h4>{name}</h4>
                            </div>
                        })}
                    </div>
                    {!desktopLayout && <i className="fa fa-angle-double-right" onClick={translateRight} aria-hidden="true"></i>}
                </div>
            </div>
        </section>
    );
}
export default Projects;
