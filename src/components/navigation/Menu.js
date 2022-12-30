import { useEffect, useContext } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { AppContext } from "../flow/AppContext";

const Menu = ({ menuExpanded, setMenuExpanded, currentScroll, setCurrentScroll, pageHeight, setPageHeight }) => {

    const { navData } = useContext(AppContext);

    const checkPageHeight = () => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.getBoundingClientRect().height, html.getBoundingClientRect().height);
        setPageHeight(Number((height - window.innerHeight).toFixed(0)));
    }

    useEffect(() => {
        const projects = document.getElementById('projectsScrollLink');
        const contact = document.getElementById('contactScrollLink');
        const skills = document.getElementById('skillsScrollLink');
        const footerSection = document.getElementById('footer').getBoundingClientRect().height;
        if (navData?.menu) {
            if (currentScroll >= pageHeight) {
                projects.classList.remove('active');
                contact.classList.add('active');
            } else if (currentScroll >= (pageHeight - footerSection)) {
                projects.classList.add('active');
                contact.classList.remove('active');
            } else projects.classList.remove('active');
            if (skills.classList.contains('active')) projects.classList.remove('active');
            if (contact.classList.contains('active')) projects.classList.remove('active');
            if (currentScroll <= 500) contact.classList.remove('active');
        }
    }, [currentScroll, pageHeight, navData]);

    useEffect(() => {
        checkPageHeight();
        window.addEventListener('resize', checkPageHeight);
        window.addEventListener('scroll', scrollUpdate);
    }, []);

    const scrollUpdate = () => {
        setCurrentScroll(window.scrollY);
        checkPageHeight();
    }

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

    useEffect(() => {
        const menu = document.querySelector('.menu');
        if (menuExpanded) menu.style.transform = 'scale(1)';
        else menu.style.transform = 'scale(0)';
    }, [menuExpanded]);

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', scrollUpdate);
            window.addEventListener('resize', checkPageHeight);
        }
    }, []);

    return (
        <>
            {menuExpanded ?
                <i onClick={() => handleExpandMenu(false)} className="fa fa-times" aria-hidden="true"></i> :
                <i onClick={() => handleExpandMenu(true)} className="fa fa-bars" aria-hidden="true"></i>
            }
            <div className="pseudo-handlers">
                <i className="fa fa-times" aria-hidden="true"></i>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="menu">
                <h2>Menu</h2>
                {navData?.menu && <>
                    <ScrollLink id="aboutScrollLink" onClick={() => setMenuExpanded(false)} isDynamic={true} spy={true} activeClass="active" className="option" to="about" smooth={true} duration={400} offset={-130}>{navData.menu.about}</ScrollLink>
                    <ScrollLink id="skillsScrollLink" onClick={() => setMenuExpanded(false)} isDynamic={true} spy={true} activeClass="active" className="option" to="skillSet" smooth={true} duration={400} offset={-130}>{navData.menu.skills}</ScrollLink>
                    <ScrollLink id="projectsScrollLink" onClick={() => setMenuExpanded(false)} isDynamic={true} spy={true} activeClass="active" className="option" to="projects" smooth={true} duration={400} offset={-130}>{navData.menu.projects}</ScrollLink>
                    <ScrollLink id="contactScrollLink" onClick={() => setMenuExpanded(false)} isDynamic={true} spy={true} activeClass="active" className="option" to="footer" smooth={true} duration={400} >{navData.menu.contact}</ScrollLink>
                </>}
            </div>
        </>
    );
}
export default Menu;