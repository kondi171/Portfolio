import { useState, createContext } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

  const [navData, setNavData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [projectsData, setProjectsData] = useState({});
  const [footerData, setFooterData] = useState({});
  const [theme, setTheme] = useState('Lambda');
  const [projectPageAccessibility, setProjectPageAccessibility] = useState(false);
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
        projectPageAccessibility,
        setProjectPageAccessibility
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
