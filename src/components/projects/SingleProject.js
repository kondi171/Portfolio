import { useContext } from "react";
import { AppContext } from './../flow/AppContext';
import testImg from './../../assets/img/projects/BlockBall/test.jpg'
import CPP from './../../assets/img/stack/CPP.png'
const SingleProject = () => {
    // const { projectsData } = useContext('AppContext');
    return (
        <section className="project">
            <div className="back-to-main-page-button">
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <h2>ProjectName</h2>
            <div className="image-stack">
                <img src={testImg} alt="testIMG" />
            </div>
            <div className="tech-stack">
                <h3 className="tech-stack__header">Stack</h3>
                <div className="tech-stack__items">
                    <div className="tech-stack__item">
                        <img src={CPP} alt="C++" />
                        <h4>C++</h4>
                    </div>
                    <div className="tech-stack__item">
                        <img src={CPP} alt="C++" />
                        <h4>C++</h4>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="content__item">
                    <h3>Description</h3>
                    <p>Desktop Application implemented in C++ with Allegro 5 Library.</p>
                </div>
                <div className="content__item">
                    <h3>Game instructions</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores numquam nemo laborum alias cupiditate facere aspernatur ea aliquam ratione nihil quia reiciendis at? Enim expedita, mollitia nostrum autem amet excepturi ipsa fugit, tempore sapiente tempora quo, eveniet nemo laudantium.</p>
                </div>
                <div className="content__item">
                    <h3>How to run?</h3>
                    <p>Download package and install application then run it.</p>
                </div>
            </div>
            <div className="authors">
                <h3 className="authors__header">Authors</h3>
                <ul>
                    <li>@Konrad Nowak</li>
                    <li>@Kamil Wypych</li>
                </ul>
            </div>
            <div className="links">
                <h3 className="links__header">Visit</h3>
                <div className="link">
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <a href="#">Visit repository on github</a>
                </div>
                <div className="link">
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <a href="#">Visit website</a>
                </div>
            </div>
        </section>
    );
}
export default SingleProject;