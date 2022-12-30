import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { AppContext } from './../flow/AppContext';
import caricatureLambda from './../../assets/img/avatar/caricature-lambda.png'
import caricatureAbyss from './../../assets/img/avatar/caricature-abyss.png'
import Footer from './../Footer';
import Loading from "../features/loading/Loading";


const SingleProject = () => {
    const { projectsData, setProjectsData, language, theme } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [projectID, setProjectID] = useState('BlockBall');
    const [project, setProject] = useState({});
    const [projectImages, setProjectImages] = useState({});
    const [desktopLayout, setDesktopLayout] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkPageWidth = () => {
        const body = document.body;
        const html = document.documentElement;
        const width = Math.max(body.getBoundingClientRect().width, html.getBoundingClientRect().width);
        if (width >= 1024) setDesktopLayout(true);
        else setDesktopLayout(false);
    }
    const navigateToLandingPage = () => {
        navigate('../', { state: { changeTheme: false } });
        setIsLoading(true);

    }
    const navigateToPreviousProject = () => {
        const currentProjectIndex = projectsData.projects.findIndex(project => project.id === projectID);
        if (currentProjectIndex === 0) navigate(`/project/${projectsData.projects[projectsData.projects.length - 1].id}`, { state: { images: location.state.images } });
        else navigate(`/project/${projectsData.projects[currentProjectIndex - 1].id}`, { state: { images: location.state.images } });
        setIsLoading(true);
    }
    const navigateToNextProject = () => {
        const currentProjectIndex = projectsData.projects.findIndex(project => project.id === projectID);
        if (currentProjectIndex === projectsData.projects.length - 1) navigate(`/project/${projectsData.projects[0].id}`, { state: { images: location.state.images } });
        else navigate(`/project/${projectsData.projects[currentProjectIndex + 1].id}`, { state: { images: location.state.images } });
        setIsLoading(true);

    }
    useEffect(() => {
        loadPage();
    }, [isLoading]);
    const loadPage = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
    }
    useEffect(() => {
        fetch('../language/projects.json')
            .then(res => res.json())
            .then(data => {
                if (language) setProjectsData(data.pl);
                else setProjectsData(data.eng);
            });
        window.scrollTo(0, 0);
        checkPageWidth();
        window.addEventListener('resize', checkPageWidth);
        loadPage();

    }, []);
    useEffect(() => {
        if (!isLoading) {
            const singleProjectBackground = document.querySelector('.project');
            singleProjectBackground.dataset.theme = theme;
            const projectHeader = document.querySelector('.project h2');
            projectHeader.dataset.theme = theme;
            const techStackHeader = document.querySelector('.tech-stack__header');
            techStackHeader.dataset.theme = theme;
            const techStackItemsImages = document.querySelectorAll('.tech-stack__item img');
            techStackItemsImages.forEach(item => item.dataset.theme = theme);
            const techStackItemsHeaders = document.querySelectorAll('.tech-stack__item h4');
            techStackItemsHeaders.forEach(item => item.dataset.theme = theme);
            const contentItems = document.querySelectorAll('.content__item h3');
            contentItems.forEach(item => item.dataset.theme = theme);
            const authorsHeader = document.querySelector('.authors__header');
            authorsHeader.dataset.theme = theme;
            const authors = document.querySelectorAll('.authors li a');
            authors.forEach(author => author.dataset.theme = theme);
            const linksHeader = document.querySelector('.links__header');
            linksHeader.dataset.theme = theme;
            const links = document.querySelectorAll('.links .link a');
            links.forEach(link => link.dataset.theme = theme);
            const strongs = document.querySelectorAll('strong');
            strongs.forEach(strong => strong.dataset.theme = theme);
            const hyperlinks = document.querySelectorAll('.content a');
            hyperlinks.forEach(hyperlink => hyperlink.dataset.theme = theme);

            const projectsSectionController = document.querySelector('.projects-section-control');
            const arrows = document.querySelectorAll('.projects-section-control i');
            arrows.forEach(arrow => arrow.dataset.theme = theme);
            projectsSectionController.dataset.theme = theme;
            const footerSourceAuthors = document.querySelectorAll('.footer__sources a');
            const footerHeaders = document.querySelectorAll('.footer__content h4');
            const footerImage = document.querySelector('.footer__author .img-wrapper');
            const footerSocialsTooltip = document.querySelector('.footer__author .socials');
            const footerSocials = document.querySelectorAll('.footer__author a');

            footerImage.dataset.theme = theme;
            footerSocials.forEach(social => social.dataset.theme = theme);
            footerSocialsTooltip.dataset.theme = theme;

            if (footerSourceAuthors.length !== 0) {
                footerSourceAuthors.forEach(author => author.dataset.theme = theme);
                footerHeaders.forEach(header => header.dataset.theme = theme);
            }
            const footerIcons = document.querySelectorAll('.contact span');
            if (footerIcons.length !== 0) {
                footerIcons.forEach(icon => icon.dataset.theme = theme);
            }
            const footer = document.getElementById('footer');
            footer.dataset.theme = theme;
        }
    }, [isLoading]);
    useEffect(() => {
        const url = window.location.href;
        const splitURL = url.split('/');
        setProjectID(splitURL[splitURL.length - 1]);
        const projectImg = location.state.images.filter(image => image.id === projectID);
        setProjectImages(projectImg[0]);
    }, [projectID, location.state]);

    useEffect(() => {
        if (Object.keys(projectsData).length !== 0) {
            const currentProject = projectsData.projects.filter(project => project.id === projectID);
            setProject(currentProject[0]);
        } else navigateToLandingPage();
    }, [projectsData, projectID]);

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', checkPageWidth);
        }
    }, []);

    return (
        <>
            {isLoading ? <Loading /> :
                <section className="project">
                    <div className="projects-section-control">
                        <div className="tooltip" target="_blank" rel="noreferrer">
                            <i className="fa fa-angle-double-left tooltip__icon" onClick={navigateToPreviousProject} aria-hidden="true"></i>
                            <span className="tooltip__text">{Object.keys(projectsData).length !== 0 && projectsData?.projectSectionController[0]}</span>
                        </div>
                        <div className="tooltip" target="_blank" rel="noreferrer">
                            <img id="caricature" className="caricature tooltip__icon" onClick={navigateToLandingPage} src={theme === 'Lambda' ? caricatureLambda : caricatureAbyss} alt="Author caricature" />
                            <span className="tooltip__text">{Object.keys(projectsData).length !== 0 && projectsData?.projectSectionController[1]}</span>
                        </div>
                        <div className="tooltip" target="_blank" rel="noreferrer">
                            <i className="fa fa-angle-double-right tooltip__icon" onClick={navigateToNextProject} aria-hidden="true"></i>
                            <span className="tooltip__text">{Object.keys(projectsData).length !== 0 && projectsData?.projectSectionController[2]}</span>
                        </div>
                    </div>

                    <h2>{project?.name}</h2>
                    <div className="desktop-layout">
                        <div className="image-stack">
                            {Object.keys(projectImages).length !== 0 && projectImages?.img.map((img, index) => {
                                return <img key={`${index} image`} src={img} alt={`${project.name} ${index + 1} representation`} />
                            })}
                            {desktopLayout && <>
                                <div className="authors">
                                    <h3 className="authors__header">{project?.authors?.title}</h3>
                                    <ul>
                                        {project?.authors?.authors?.map(author => <li key={author.name}><a href={author.link}>{author.name}</a></li>)}
                                    </ul>
                                </div>
                                <div className="links">
                                    <h3 className="links__header">{project?.links?.title}</h3>
                                    {project?.links?.links?.map(link => {
                                        const { url, content, icon } = link;
                                        return <div key={url} className="link">
                                            <a href={url} rel="noreferrer" target='_blank'>
                                                <i className={`fa fa-${icon}`} aria-hidden="true"></i>
                                                <span>{content}</span>
                                            </a>
                                        </div>
                                    })}
                                </div></>}
                        </div>
                        <div className="desktop-content">
                            <div className="tech-stack">
                                <h3 className="tech-stack__header">{project?.techStack?.title}</h3>
                                <div className="tech-stack__items">
                                    {project?.techStack?.stack.map((stack, index) => {
                                        return <div key={stack} className="tech-stack__item">
                                            <img src={projectImages.stack[index]} alt={stack} />
                                            <h4>{stack}</h4>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="content">
                                {project?.representation?.map(representation => {
                                    const { title, content } = representation;
                                    return <div key={title} className="content__item">
                                        <h3>{title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: content }}></p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    {!desktopLayout && <>
                        <div className="authors">
                            <h3 className="authors__header">{project?.authors?.title}</h3>
                            <ul>
                                {project?.authors?.authors?.map(author => <li key={author.name}><a href={author.link}>{author.name}</a></li>)}
                            </ul>
                        </div>
                        <div className="links">
                            <h3 className="links__header">{project?.links?.title}</h3>
                            {project?.links?.links?.map(link => {
                                const { url, content, icon } = link;
                                return <div key={url + Math.floor(Math.random() * 10000)} className="link">
                                    <a href={url} rel="noreferrer" target='_blank'>
                                        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
                                        <span>{content}</span>
                                    </a>
                                </div>
                            })}
                        </div></>}
                    <div className="space-cleaner"></div>
                    <Footer />
                </section>}
        </>
    );
}
export default SingleProject;