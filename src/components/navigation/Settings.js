import { useEffect, useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { AppContext } from "../flow/AppContext";
const Settings = () => {

    const { navData, setNavData, setAboutData, setSkillsData, setProjectsData, setFooterData, theme, setTheme, language, setLanguage, isThemeChanged } = useContext(AppContext);

    const [settingsOpen, setSettingsOpen] = useState(false);

    const rotateCog = useSpring({
        loop: true,
        immediate: settingsOpen ? true : false,
        config: {
            duration: 10000,
        },
        from: { rotateZ: 0 },
        rotateZ: 360,
    });

    const handleSettings = e => {
        e.target.nextSibling.classList.toggle('visible');
        setSettingsOpen(!settingsOpen);
    }

    const fetchData = () => {
        fetch('../language/nav.json')
            .then(res => res.json())
            .then(data => {
                if (language) setNavData(data.pl);
                else setNavData(data.eng);
            });
        fetch('../language/about.json')
            .then(res => res.json())
            .then(data => {
                if (language) setAboutData(data.pl);
                else setAboutData(data.eng);
            });
        fetch('../language/skills.json')
            .then(res => res.json())
            .then(data => {
                if (language) setSkillsData(data.pl);
                else setSkillsData(data.eng);
            });
        fetch('../language/projects.json')
            .then(res => res.json())
            .then(data => {
                if (language) setProjectsData(data.pl);
                else setProjectsData(data.eng);
            });
        fetch('../language/footer.json')
            .then(res => res.json())
            .then(data => {
                if (language) setFooterData(data.pl);
                else setFooterData(data.eng);
            });
    }

    const handleChangeLanguage = () => {
        setLanguage(!language);
        fetchData();
    }
    const readyTheme = (theme) => {
        const headerTitle = document.querySelector('.header__title');
        const headerAuthor = document.querySelector('.header__author');

        const nav = document.getElementById('nav');
        const menu = document.querySelectorAll('.menu .option');
        const cog = document.querySelector('.fa.fa-cog');

        const settings = document.querySelector('.settings-wrapper > .settings');
        const settingsHeaders = document.querySelectorAll('.settings h4');
        const settingsSpans = document.querySelectorAll('.settings span');
        const settingsBtns = document.querySelectorAll('.settings span+i');

        const progressBar = document.querySelector('.progress-bar');
        const scrollBar = document.body;

        const about = document.getElementById('about');
        const aboutArticle = document.querySelectorAll('.about-article');

        const skillSet = document.getElementById('skillSet');
        const skills = document.querySelectorAll('.stack-item');
        const strongs = document.querySelectorAll('strong');

        headerTitle.dataset.theme = theme;
        headerAuthor.dataset.theme = theme;

        nav.dataset.theme = theme;
        menu.forEach(option => option.dataset.theme = theme);
        cog.dataset.theme = theme;

        settings.dataset.theme = theme;
        settingsHeaders.forEach(header => header.dataset.theme = theme);
        settingsSpans.forEach(span => span.dataset.theme = theme);
        settingsBtns.forEach(btn => btn.dataset.theme = theme);

        progressBar.dataset.theme = theme;
        scrollBar.dataset.theme = theme;

        about.dataset.theme = theme;
        if (aboutArticle.length !== 0) {
            aboutArticle.forEach(article => {
                article.firstChild.dataset.theme = theme;
                article.dataset.theme = theme;
            });
        }

        skillSet.dataset.theme = theme;
        strongs.forEach(strong => strong.dataset.theme = theme);
        if (skills.length !== 0) {
            skills.forEach(skill => {
                skill.dataset.theme = theme;
                for (let i = 0; i < skill.childNodes.length; i++) {
                    skill.childNodes[i].dataset.theme = theme;
                }
            })
        }
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
        const skillHeader = document.querySelector('#skillSet h2');
        skillHeader.dataset.theme = theme;
        const timer = document.querySelector('.change-time-info');
        timer.dataset.theme = theme;
        const layer = document.querySelector('.img-layer');
        layer.dataset.theme = theme;
        const layerBtn = document.querySelector('.project-btn');
        layerBtn.dataset.theme = theme;
        const carussel = document.querySelector('.carussel__content');
        carussel.dataset.theme = theme;
        const projectsMiniatures = document.querySelectorAll('.project-miniature img');
        projectsMiniatures.forEach(projectMiniature => projectMiniature.dataset.theme = theme);
        const projectsSection = document.getElementById('projects');
        projectsSection.dataset.theme = theme;
        const caricature = document.querySelector('.caricature');
        caricature.dataset.theme = theme;

        const menuHeaderMobile = document.querySelector('.menu h2');
        menuHeaderMobile.dataset.theme = theme;
        const times = document.querySelectorAll('.fa-times');
        times.forEach(times => times.dataset.theme = theme);
        const bars = document.querySelectorAll('.fa-bars');
        bars.forEach(bars => bars.dataset.theme = theme);
    }
    const handleChangeTheme = () => {
        const newTheme = theme === 'Abyss' ? 'Lambda' : 'Abyss';
        setTheme(newTheme);
        readyTheme(newTheme);
    }

    window.addEventListener('scroll', () => {
        setSettingsOpen(false);
    });

    useEffect(() => {
        fetchData();
    }, [language]);

    useEffect(() => {
        if (isThemeChanged) handleChangeTheme();
        else readyTheme(theme);
    }, []);

    return (
        <div className="settings-wrapper">
            <animated.i onClick={e => handleSettings(e)} className="fa fa-cog" aria-hidden="true" style={rotateCog}></animated.i>
            <div id="settings" className="settings">
                <h4>{navData?.settings?.changeLanguage}</h4>
                <div onClick={handleChangeLanguage} className="settings__btn">
                    <span>PL</span>
                    {language ? <i className="fa fa-toggle-off" aria-hidden="true"></i> : <i className="fa fa-toggle-on" aria-hidden="true"></i>}
                    <span>ENG</span>
                </div>
                <h4>{navData?.settings?.changeTheme}</h4>
                <div onClick={handleChangeTheme} className="settings__btn">
                    <span>Abyss</span>
                    {theme === "Lambda" ? <i className="fa fa-toggle-on" aria-hidden="true"></i> : <i className="fa fa-toggle-off" aria-hidden="true"></i>}
                    <span>Lambda</span>
                </div>
            </div>
        </div>
    );
}
export default Settings;