import { useEffect, useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { AppContext } from "../../AppContext";
const Settings = () => {

    const { navData, setNavData, setAboutData, setSkillsData, setProjectsData, setFooterData } = useContext(AppContext);

    const [settingsOpen, setSettingsOpen] = useState(false);
    const [language, setLanguage] = useState(true); // pl - true; eng - false
    const [theme, setTheme] = useState(false);

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

    window.addEventListener('scroll', () => {
        setSettingsOpen(false);
    });

    useEffect(() => {
        fetchData();
    }, [language]);

    return (
        <div className="settings-wrapper">
            <animated.i onClick={e => handleSettings(e)} className="fa fa-cog" aria-hidden="true" style={rotateCog}></animated.i>
            <div id="settings" className="settings">
                <h4>{Object.keys(navData).length !== 0 && navData.settings.changeLanguage}</h4>
                <div onClick={handleChangeLanguage} className="settings__btn">
                    <span>PL</span>
                    {language ? <i className="fa fa-toggle-off" aria-hidden="true"></i> : <i className="fa fa-toggle-on" aria-hidden="true"></i>}
                    <span>ENG</span>
                </div>
                <h4>{Object.keys(navData).length !== 0 && navData.settings.changeTheme}</h4>
                <div onClick={() => setTheme(!theme)} className="settings__btn">
                    <span>{Object.keys(navData).length !== 0 && navData.settings.light}</span>
                    {theme ? <i className="fa fa-toggle-off" aria-hidden="true"></i> : <i className="fa fa-toggle-on" aria-hidden="true"></i>}
                    <span>{Object.keys(navData).length !== 0 && navData.settings.dark}</span>
                </div>
            </div>
        </div>
    );
}
export default Settings;