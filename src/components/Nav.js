import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import { useSpring, animated } from "react-spring";
import { Link as ScrollLink } from 'react-scroll';

import caricature from './../assets/img/avatar/caricature.png';

const Nav = () => {

    const [settingsOpen, setSettingsOpen] = useState(false);
    const [pageHeight, setPageHeight] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);

    const navFade = useSpring({
        from: { translateY: -100 },
        translateY: 0,
        delay: 500,
        config: { duration: 1000 }
    });

    const rotateCog = useSpring({
        loop: true,
        immediate: settingsOpen ? true : false,
        config: {
            duration: 10000,
        },
        from: { rotateZ: 0 },
        rotateZ: 360,
    });

    // const [language, setLanguage] = useState("pl");
    // const [languageData, setLanguageData] = useState(null);
    // const getLanguage = () => {
    //     fetch('language/nav.json', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //         .then(language => language.json())
    //         .catch(error => console.log(error));
    // }

    // useEffect(() => {
    //     const getLanguageData = async () => {
    //         const json = await getLanguage();
    //         // console.log(json);
    //         setLanguageData(json);
    //     };
    //     getLanguageData();
    //     return () => {
    //         // this now gets called when the component unmounts
    //     };
    // }, []);

    // useEffect(() => {
    //     console.log(languageData);
    // }, [languageData]);

    const handleSettings = e => {
        console.log(e.target.nextSibling);
        e.target.nextSibling.classList.toggle('visible');
        setSettingsOpen(!settingsOpen);
    }
    window.addEventListener('scroll', () => {
        setCurrentScroll(window.scrollY);
    });

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.getBoundingClientRect().height, html.getBoundingClientRect().height);
        setPageHeight(height - window.innerHeight);
    }, []);

    useEffect(() => {
        const header = document.getElementById('header');
        const nav = document.querySelector('.nav');
        const caricature = document.getElementById('caricature');
        window.addEventListener('scroll', () => {
            if (window.scrollY + 150 > header.offsetHeight) {
                nav.classList.add('rolled');
                caricature.classList.add('display');
            } else {
                nav.classList.remove('rolled');
                caricature.classList.remove('display');
            }
        });
    });

    return (
        <animated.nav className="nav" style={navFade}>
            <progress className="progress-bar" value={currentScroll} max={pageHeight}></progress>
            <div className="settings-wrapper">
                <animated.i onClick={e => handleSettings(e)} className="fa fa-cog" aria-hidden="true" style={rotateCog}></animated.i>
                <div className="settings">
                    <h4>Change Language</h4>
                    <div className="settings__btn">
                        <span>PL</span>
                        <i className="fa fa-toggle-on" aria-hidden="true"></i>
                        <span>ENG</span>
                    </div>
                    <h4>Change Theme</h4>
                    <div className="settings__btn">
                        <span>Light</span>
                        <i className="fa fa-toggle-on" aria-hidden="true"></i>
                        <span>Dark</span>
                    </div>
                </div>
            </div>
            <img id="caricature" className="caricature" onClick={() => scroll.scrollToTop()} src={caricature} alt="Caricature" />
            <i className="fa fa-bars" aria-hidden="true"></i>
            <div className="menu">
                <ScrollLink className="option" to="about" smooth={true} duration={400} offset={-130}>About</ScrollLink>
                <ScrollLink className="option" to="skillSet" smooth={true} duration={400} offset={-130}>Skills</ScrollLink>
                <ScrollLink className="option" to="projects" smooth={true} duration={400} offset={-130}>Projects</ScrollLink>
            </div>

        </animated.nav>
    );
}
export default Nav;
