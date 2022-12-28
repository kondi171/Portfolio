import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

import Progress from "./Progress";
import Settings from "./Settings";
import Caricature from "./Caricature";
import Menu from "./Menu";

const Nav = () => {

    const navFade = useSpring({
        from: { translateY: -1000 },
        translateY: 0,
        delay: 500,
        config: { duration: 1000 }
    });

    useEffect(() => {
        const header = document.getElementById('header');
        const nav = document.querySelector('.nav');
        const caricature = document.getElementById('caricature');
        const progress = document.querySelector('.progress-bar');
        window.addEventListener('scroll', () => {
            if (window.scrollY + 150 > header.offsetHeight) {
                nav.classList.add('rolled');
                caricature.classList.add('display');
                progress.classList.add('display');
            } else {
                nav.classList.remove('rolled');
                caricature.classList.remove('display');
                progress.classList.remove('display');
            }
        });
    }, []);

    return (
        <animated.nav id="nav" className="nav" style={navFade}>
            <Progress />
            <Settings />
            <Caricature />
            {/* <Menu /> */}
        </animated.nav>
    );
}
export default Nav;
