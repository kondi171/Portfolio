import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../flow/AppContext';

import BlockBall_01 from './../../assets/img/projects/BlockBall/BlockBall_01.png';
import BlockBall_02 from './../../assets/img/projects/BlockBall/BlockBall_02.png';
import BlockBall_03 from './../../assets/img/projects/BlockBall/BlockBall_03.png';

import Panzers1916_01 from './../../assets/img/projects/Panzers1916/Panzers1916_01.png';
import Panzers1916_02 from './../../assets/img/projects/Panzers1916/Panzers1916_02.png';
import Panzers1916_03 from './../../assets/img/projects/Panzers1916/Panzers1916_03.png';

import MultiLines_01 from './../../assets/img/projects/MultiLines/MultiLines_01.png';
import MultiLines_02 from './../../assets/img/projects/MultiLines/MultiLines_02.png';
import MultiLines_03 from './../../assets/img/projects/MultiLines/MultiLines_03.png';

import CzasNaMasaz_01 from './../../assets/img/projects/CzasNaMasaz/CzasNaMasaz_01.png';
import CzasNaMasaz_02 from './../../assets/img/projects/CzasNaMasaz/CzasNaMasaz_02.png';
import CzasNaMasaz_03 from './../../assets/img/projects/CzasNaMasaz/CzasNaMasaz_03.png';

import LazyTaste_01 from './../../assets/img/projects/LazyTaste/LazyTaste_01.png';
import LazyTaste_02 from './../../assets/img/projects/LazyTaste/LazyTaste_02.png';
import LazyTaste_03 from './../../assets/img/projects/LazyTaste/LazyTaste_03.png';

const Projects = () => {
    const { projectsData } = useContext(AppContext);
    const projectsImages = [
        {
            id: 'BlockBall',
            img: [
                BlockBall_01,
                BlockBall_02,
                BlockBall_03
            ]
        },
        {
            id: 'Panzers1916',
            img: [
                Panzers1916_01,
                Panzers1916_02,
                Panzers1916_03
            ]
        },
        {
            id: 'MultiLines',
            img: [
                MultiLines_01,
                MultiLines_02,
                MultiLines_03
            ]
        },
        {
            id: 'CzasNaMasaz',
            img: [
                CzasNaMasaz_01,
                CzasNaMasaz_02,
                CzasNaMasaz_03
            ]
        },
        {
            id: 'LazyTaste',
            img: [
                LazyTaste_01,
                LazyTaste_02,
                LazyTaste_03
            ]
        }
    ];
    const navigate = useNavigate();
    const [activePhoto, setActivePhoto] = useState(0);
    const [activeProject, setActiveProject] = useState({
        id: "BlockBall",
        name: "Block Ball",
        content: "Desktop Application implemented in C++ with Allegro 5 Library.",
        images: projectsImages[0].img[0]
    });


    const handleActiveMiniature = e => {
        const carusselImgs = document.querySelectorAll('.project-miniature');
        carusselImgs.forEach(img => img.classList.remove('active'));
        const id = e.target.parentNode.dataset.id;
        const name = e.target.parentNode.dataset.name;
        const content = e.target.parentNode.dataset.content;
        const activeMiniature = e.target.parentNode;
        activeMiniature.classList.add('active');

        // const activeImages = projectsImages.filter(projectImages => console.log(projectImages));
        const selectActiveImagesObject = projectsImages.filter(activeImagesObject => activeImagesObject.id === id);
        const activeImages = selectActiveImagesObject.map(activeImages => activeImages.img);
        setActiveProject({
            id: id,
            name: name,
            content: content,
            images: activeImages
        });
    }

    useEffect(() => {
        setTimeout(() => {
            if (activePhoto === 2) setActivePhoto(0);
            else setActivePhoto(activePhoto + 1);
        }, 5000);
    }, [activePhoto]);

    useEffect(() => {
        console.log(activeProject.images);
    }, []);

    return (
        <section id="projects" className="projects">
            <h2>{projectsData?.title}</h2>
            <div className="projects__large-project">
                <img src={activeProject.images[0][activePhoto]} alt={`${activeProject.name} project`} />
                <div className="img-layer">
                    <span>{activeProject.content}</span>
                    <button onClick={() => navigate(`/project/${activeProject.id}`, { id: activeProject.id })} className="project-btn">Otwórz projekt</button>
                </div>
            </div>
            <h3 className='project-name'>{activeProject.name}</h3>
            <div className="projects__carussel">
                {projectsData?.projects?.map((miniature, index) => {
                    const { id, name, representation } = miniature;
                    return <div key={id} data-id={id} data-name={name} data-content={representation[0].content} onClick={e => handleActiveMiniature(e)} className="project-miniature">
                        <img src={projectsImages[index].img[0]} alt={`Miniature of ${name} project`} />
                    </div>
                })}
            </div>
        </section>
    );
}
export default Projects;
