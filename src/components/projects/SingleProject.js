import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { AppContext } from './../flow/AppContext';
import Footer from './../Footer';


const SingleProject = () => {
    const { projectsData, projectPageAccessibility } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [projectID, setProjectID] = useState('BlockBall');
    const [project, setProject] = useState({});
    const [projectImages, setProjectImages] = useState({});
    const [desktopLayout, setDesktopLayout] = useState(false);
    // change to LazyTaste on deploy
    const checkPageWidth = () => {
        const body = document.body;
        const html = document.documentElement;
        const width = Math.max(body.getBoundingClientRect().width, html.getBoundingClientRect().width);
        if (width >= 1024) setDesktopLayout(true);
        else setDesktopLayout(false);
    }

    useEffect(() => {
        // if (!projectsData) {
        //     fetch('../language/projects.json')
        //         .then(res => res.json())
        //         .then(data => {
        //             setProject(data.pl);
        //         });
        // }
        // console.log(projectsData);
        checkPageWidth();
        window.addEventListener('resize', checkPageWidth);
    }, []);

    useEffect(() => {
        // if (!projectPageAccessibility) navigate('/error');
        setProjectID(location.state.id);
        const projectImg = location.state.images.filter(image => image.id === location.state.id);
        setProjectImages(projectImg[0]);
        // console.log(location.state.images);
    }, [projectID, location.state]);

    useEffect(() => {
        const currentProject = projectsData.projects.filter(project => project.id === projectID);
        setProject(currentProject[0]);
    }, [projectsData, projectID]);

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', checkPageWidth);
        }
    }, []);

    return (
        <section className="project">
            <div className="back-to-main-page-button">
                <i className="fa fa-times" aria-hidden="true"></i>
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
                        return <div key={url} className="link">
                            <a href={url} rel="noreferrer" target='_blank'>
                                <i className={`fa fa-${icon}`} aria-hidden="true"></i>
                                <span>{content}</span>
                            </a>
                        </div>
                    })}
                </div></>}
            <div className="space-cleaner"></div>
            <Footer />
        </section>
    );
}
export default SingleProject;