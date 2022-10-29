import { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring";

import Nav from './Nav';
import Konrad from './../assets/img/avatar/Konrad.jpeg';
const Header = () => {

    const titles = [
        'Frontend',
        'React.js',
        'JavaScript',
        'Web'
    ];

    const [titleIndex, setTitleIndex] = useState(0);
    const [resolutionWidth, setResolutionWidth] = useState(900);

    const titleFade = useSpring({
        from: { scale: 0 },
        scale: 1,
        delay: 1000,
        config: { duration: 400 }
    })
    useEffect(() => {
        // setInterval(() => {
        //     if (titleIndex > titles.length) {
        //         console.log('state zero');
        //         setTitleIndex(0);
        //     }
        //     else {
        //         setTitleIndex(titleIndex + 1);
        //         console.log('increment' + titleIndex);
        //     }
        // }, 3000);
    }, []);
    useEffect(() => {
        const spnCursor = document.querySelector('.cursor');
        setTimeout(() => {
            const spnText = document.querySelector('.text');

            const txt = 'Konrad Nowak';
            let letterAdding = 0;
            const letterInterval = setInterval(() => {
                // console.log(txt.length);
                if (letterAdding >= txt.length) clearInterval(letterInterval);
                else {
                    spnText.textContent += txt[letterAdding];
                    letterAdding++;
                }

            }, 200);
        }, 1000);
        setInterval(() => {
            spnCursor.classList.toggle('active');
        }, 600);
    }, []);

    return (
        <header id="header" className="header">
            <Nav />
            <animated.div className="header__title" style={titleFade}>
                <span>Junior</span>
                <span>{titles[titleIndex]}</span>
                <span>Developer</span>
            </animated.div>
            <span className="header__author"><span className="text"></span><span className="cursor">|</span></span>
        </header>
    );
}
export default Header;