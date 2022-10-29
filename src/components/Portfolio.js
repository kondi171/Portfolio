import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import SkillSet from "./skills/SkillSet";
import Loading from "./features/loading/Loading";

const Portfolio = () => {
    const [init, setInit] = useState(false);
    const fadePage = useSpring({
        delay: 300,
        from: { opacity: 0, translateY: '-100px' },
        to: { opacity: 1, translateY: '0', overflowX: 'hidden', }
    });
    useEffect(() => {
        window.onload = () => {
            setTimeout(() => {
                setInit(true);
            }, 300);
        };
    }, []);

    return (
        <div className="wrapper" >
            {init ? <animated.div style={fadePage}>
                <Header />
                <About />
                <SkillSet />
                <Projects />
                <Footer />
            </animated.div> : <>
                <Loading />
            </>
            }
        </div>

    );
}

export default Portfolio;
