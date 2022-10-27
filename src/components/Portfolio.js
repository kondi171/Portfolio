import { useState, useEffect } from "react";

import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import SkillSet from "./skills/SkillSet";

const Portfolio = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        window.onload = () => {
            setInit(true);
        };
    }, []);

    return (
        <div className="wrapper">
            {init ? <>
                <Header />
                <About />
                <SkillSet />
                <Projects />
                <Footer />
            </> : <>
                Loading
            </>
            }
        </div>

    );
}

export default Portfolio;
