// import { animateScroll as scroll } from "react-scroll/modules";

import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from "react";
const Nav = () => {
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

    const handleSettings = () => {

    }

    return (
        <nav className="nav mobile">
            <i onClick={handleSettings} className="fa fa-cog" aria-hidden="true"></i>
            <i className="fa fa-bars" aria-hidden="true"></i>
            <div className="menu">
                <ScrollLink className="option" to="about" smooth={true} duration={400} offset={-130}>About</ScrollLink>
                <ScrollLink className="option" to="skillSet" smooth={true} duration={400} offset={-130}>Skills</ScrollLink>
                <ScrollLink className="option" to="projects" smooth={true} duration={400} offset={-130}>Projects</ScrollLink>
            </div>
            <div className="settings">
                <h4>Change Language</h4>
                <div className="toggle-button-cover">
                    <div className="button-cover">
                        <div className="button r" id="button-1">
                            <input type="checkbox" className="checkbox" />
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
                <h4>Change Theme</h4>
                <div className="toggle-button-cover">
                    <div className="button-cover">
                        <div className="button r" id="button-2">
                            <input type="checkbox" className="checkbox" />
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
