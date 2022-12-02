import { useContext } from "react";
import { AppContext } from "../AppContext";
import avatar from './../assets/img/avatar/AvatarMaker.png';

const About = () => {

    const { aboutData } = useContext(AppContext);

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header').offsetHeight;
        const aboutArticles = document.querySelectorAll('.about-article');
        if (window.scrollY > header * 0.7) {
            aboutArticles[0].style.transform = 'translateX(0)';
        } else {
            aboutArticles[0].style.transform = 'translateX(-2000px)';
        }
        if (window.scrollY > header) {
            aboutArticles[1].style.transform = 'translateX(0)';
        } else {
            aboutArticles[1].style.transform = 'translateX(2000px)';
        }
        if (window.scrollY > header * 1.3) {
            aboutArticles[2].style.transform = 'translateX(0)';
        } else {
            aboutArticles[2].style.transform = 'translateX(-2000px)';
        }
        if (window.scrollY > header * 1.6) {
            aboutArticles[3].style.transform = 'translateX(0)';
        } else {
            aboutArticles[3].style.transform = 'translateX(-2000px)';
        }
    });
    return (
        <section id="about" className="about">
            <div className="intro">
                <h2 className="intro__title">{Object.keys(aboutData).length !== 0 && aboutData.title}</h2>
                <div className="about__author">
                    <h2 className="author__title">Konrad Nowak</h2>
                    <img className='author__svg' src={avatar} alt="Author" />
                </div>
            </div>
            <div className="about__content">
                <div className="content__info">
                    {Object.keys(aboutData).length !== 0 && aboutData.about.map((data, index) => {
                        const { subtitle, description } = data;
                        return <article className="about-article" key={index} >
                            <h3>{Object.keys(data).length !== 0 && subtitle}</h3>
                            <p>{Object.keys(data).length !== 0 && description}</p>
                        </article>
                    })}
                </div>
            </div>
        </section>
    );
}

export default About;