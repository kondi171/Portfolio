import { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from "react-spring";

import Nav from './navigation/Nav';
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
    });

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    const animateTitleChange = index => {
        const randomAnimationIndex = Math.floor(Math.random() * 3) + 1;
        const titleSpan = document.querySelector('.header__title span:nth-of-type(2)');
        titleSpan.classList.add(`animate-${randomAnimationIndex}`);
        setTimeout(() => {
            setTitleIndex(index);
        }, 500);
        setTimeout(() => {
            titleSpan.classList.remove(`animate-${randomAnimationIndex}`);
        }, 600);
    }
    useInterval(() => {
        if (titleIndex >= titles.length - 1) animateTitleChange(0);
        else animateTitleChange(titleIndex + 1);
    }, 3000);

    useEffect(() => {
        const spnCursor = document.querySelector('.cursor');
        setTimeout(() => {
            const spnText = document.querySelector('.text');
            const txt = 'Konrad Nowak';
            let letterAdding = 0;
            const letterInterval = setInterval(() => {
                if (letterAdding >= txt.length) clearInterval(letterInterval);
                else if (letterAdding < txt.length) {
                    spnText.textContent += txt[letterAdding];
                    letterAdding++;
                }
            }, 200);
        }, 1000);
        setInterval(() => {
            spnCursor.classList.toggle('active');
        }, 600);
    }, []);
    useEffect(() => {
        return () => {
            setTitleIndex(null);
            setResolutionWidth(null);
        }
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