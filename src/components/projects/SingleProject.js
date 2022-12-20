import { useContext } from "react";
import { AppContext } from './../flow/AppContext';
import Footer from './../Footer';
import testImg from './../../assets/img/projects/test.jpg'
import CPP from './../../assets/img/stack/CPP.png'
import { useEffect } from "react";
import { useState } from "react";

const SingleProject = () => {
    const { projectsData } = useContext(AppContext);
    const [projectID, setProjectID] = useState('BlockBall');
    const [project, setProject] = useState({});
    // change to LazyTaste on deploy

    useEffect(() => {
        // if (!projectsData) {
        //     fetch('../language/projects.json')
        //         .then(res => res.json())
        //         .then(data => {
        //             setProject(data.pl);
        //         });
        // }
        // console.log(projectsData);
    }, []);

    useEffect(() => {
        const projectLocation = window.location.href;
        const linkSplits = projectLocation.split("/");
        setProjectID(linkSplits[linkSplits.length - 1]);
    }, [projectID]);

    useEffect(() => {
        // console.log(projectsData);
        const currentProject = projectsData.projects.filter(project => project.id === projectID);
        setProject(currentProject[0]);
        console.log(currentProject);
    }, [projectsData, projectID]);
    return (
        <section className="project">
            <div className="back-to-main-page-button">
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <h2>{project?.name}</h2>
            <div className="image-stack">
                <img src={testImg} alt="testIMG" />
            </div>
            <div className="tech-stack">
                <h3 className="tech-stack__header">{project?.techStack?.title}</h3>
                <div className="tech-stack__items">
                    {project?.techStack?.stack.map(stack => {
                        return <div key={stack} className="tech-stack__item">
                            <img src={CPP} alt={stack} />
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
                        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
                        <a href={url}>{content}</a>
                    </div>
                })}
            </div>
            <Footer />
        </section>
    );
}
export default SingleProject;