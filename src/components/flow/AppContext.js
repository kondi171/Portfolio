import { useState, createContext } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

  const [navData, setNavData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [projectsData, setProjectsData] = useState({});
  const [footerData, setFooterData] = useState({});
  const [theme, setTheme] = useState('Abyss');
  const [language, setLanguage] = useState(true); // pl - true; eng - false
  const [isThemeChanged, setIsThemeChanged] = useState(true);
  return (
    <AppContext.Provider
      value={{
        navData,
        setNavData,
        aboutData,
        setAboutData,
        skillsData,
        setSkillsData,
        projectsData,
        setProjectsData,
        footerData,
        setFooterData,
        theme,
        setTheme,
        language,
        setLanguage,
        isThemeChanged,
        setIsThemeChanged
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
