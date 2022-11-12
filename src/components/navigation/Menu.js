import { useEffect, useState, useContext, useRef } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { AppContext } from "../../AppContext";

const Menu = () => {

    const { navData } = useContext(AppContext);

    const [menuExpanded, setMenuExpanded] = useState(false);
    const [pageHeight, setPageHeight] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);

    const handleExpandMenu = expanded => {
        const menu = document.querySelector('.menu');
        if (expanded) {
            menu.style.transform = 'scale(1)';
        }
        else {
            menu.style.transform = 'scale(0)';
        }
        setMenuExpanded(expanded);
    }

    window.addEventListener('scroll', () => {
        const projects = document.getElementById('projectsScrollLink');
        const contact = document.getElementById('contactScrollLink');
        if (Object.keys(navData).length !== 0) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                projects.classList.remove('active');
                contact.classList.add('active');
            } else if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                projects.classList.add('active');
                contact.classList.remove('active');
            }
        }
    });

    useEffect(() => {
        const menu = document.querySelector('.menu');
        if (menuExpanded) {
            menu.style.transform = 'scale(1)';
        }
        else {
            menu.style.transform = 'scale(0)';
        }
    }, [menuExpanded]);

    return (
        <>
            {menuExpanded ?
                <i onClick={() => handleExpandMenu(false)} className="fa fa-times" aria-hidden="true"></i> :
                <i onClick={() => handleExpandMenu(true)} className="fa fa-bars" aria-hidden="true"></i>
            }
            <div className="menu">
                <h2>Menu</h2>
                {Object.keys(navData).length !== 0 && <>
                    <ScrollLink id="aboutScrollLink" onClick={() => setMenuExpanded(false)} isDynamic={true} spy={true} activeClass="active" className="option" to="about" smooth={true} duration={400} offset={-130}>{navData.menu.about}</ScrollLink>
                    <ScrollLink id="skillsScrollLink" onClick={() => setMenuExpanded(false)} isDynamic={true} spy={true} activeClass="active" className="option" to="skillSet" smooth={true} duration={400} offset={-130}>{navData.menu.skills}</ScrollLink>
                    <ScrollLink id="projectsScrollLink" onClick={() => setMenuExpanded(false)} isDynamic={true} spy={true} activeClass="active" className="option" to="projects" smooth={true} duration={400} offset={-130}>{navData.menu.projects}</ScrollLink>
                    <ScrollLink id="contactScrollLink" onClick={() => setMenuExpanded(false)} isDynamic={true} spy={true} activeClass="active" className="option" to="footer" smooth={true} duration={400} offset={-130}>{navData.menu.contact}</ScrollLink>
                </>}
            </div>
        </>
    );
}
export default Menu;