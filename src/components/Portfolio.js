import { useState, useEffect, useContext } from "react";
import { useSpring, animated } from "react-spring";

import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./projects/Projects";
import SkillSet from "./skills/SkillSet";
import Loading from "./features/loading/Loading";

import HTML from "../assets/img/stack/HTML.png";
import CSS from "../assets/img/stack/CSS.png";
import JS from "../assets/img/stack/JS.png";
import REACT from "../assets/img/stack/React.png";
import SASS from "../assets/img/stack/SASS.png";
import Node from "../assets/img/stack/Node.png";
import MongoDB from "../assets/img/stack/MongoDB.png";
import Git from "../assets/img/stack/Git.png";
import Bootstrap from "../assets/img/stack/Bootstrap.png";
import MySQL from "../assets/img/stack/MySQL.png";
import PHP from "../assets/img/stack/PHP.png";
import CPP from "../assets/img/stack/CPP.png";
import Java from "../assets/img/stack/Java.png";

import Allegro from "../assets/img/stack/Allegro.png";
import Swing from "../assets/img/stack/Swing.png";
import AWT from "../assets/img/stack/AWT.png";
import Mongoose from "../assets/img/stack/Mongoose.png";
import Express from "../assets/img/stack/Express.png";
import Brain from "../assets/img/stack/Brain.png";

import BlockBall_01 from './../assets/img/projects/BlockBall/BlockBall_01.png';
import BlockBall_02 from './../assets/img/projects/BlockBall/BlockBall_02.png';
import BlockBall_03 from './../assets/img/projects/BlockBall/BlockBall_03.png';

import Panzers1916_01 from './../assets/img/projects/Panzers1916/Panzers1916_01.png';
import Panzers1916_02 from './../assets/img/projects/Panzers1916/Panzers1916_02.png';
import Panzers1916_03 from './../assets/img/projects/Panzers1916/Panzers1916_03.png';

import MultiLines_01 from './../assets/img/projects/MultiLines/MultiLines_01.png';
import MultiLines_02 from './../assets/img/projects/MultiLines/MultiLines_02.png';
import MultiLines_03 from './../assets/img/projects/MultiLines/MultiLines_03.png';

import CzasNaMasaz_01 from './../assets/img/projects/CzasNaMasaz/CzasNaMasaz_01.png';
import CzasNaMasaz_02 from './../assets/img/projects/CzasNaMasaz/CzasNaMasaz_02.png';
import CzasNaMasaz_03 from './../assets/img/projects/CzasNaMasaz/CzasNaMasaz_03.png';

import LazyTaste_01 from './../assets/img/projects/LazyTaste/LazyTaste_01.png';
import LazyTaste_02 from './../assets/img/projects/LazyTaste/LazyTaste_02.png';
import LazyTaste_03 from './../assets/img/projects/LazyTaste/LazyTaste_03.png';

const Portfolio = () => {

    const [isLoading, setIsLoading] = useState(true);
    const skillsImages = [
        {
            title: 'HTML',
            source: HTML
        },
        {
            title: 'CSS',
            source: CSS
        },
        {
            title: 'JavaScript',
            source: JS
        },
        {
            title: 'React.js',
            source: REACT
        },
        {
            title: 'SASS/SCSS',
            source: SASS
        },
        {
            title: 'Node.js',
            source: Node
        },
        {
            title: 'MongoDB',
            source: MongoDB
        },
        {
            title: 'Git',
            source: Git
        },
        {
            title: 'Bootstrap',
            source: Bootstrap
        },
        {
            title: 'MySQL',
            source: MySQL
        },
        {
            title: 'PHP',
            source: PHP
        },
        {
            title: 'C/C++',
            source: CPP
        },
        {
            title: 'Java',
            source: Java
        }
    ];
    const projectsImages = [
        {
            id: 'BlockBall',
            img: [
                BlockBall_01,
                BlockBall_02,
                BlockBall_03
            ],
            stack: [
                CPP,
                Allegro,
            ]
        },
        {
            id: 'Panzers1916',
            img: [
                Panzers1916_01,
                Panzers1916_02,
                Panzers1916_03
            ],
            stack: [
                Java,
                Swing,
                AWT
            ]
        },
        {
            id: 'MultiLines',
            img: [
                MultiLines_01,
                MultiLines_02,
                MultiLines_03
            ],
            stack: [
                HTML,
                SASS,
                JS,
                REACT,
            ]
        },
        {
            id: 'CzasNaMasaz',
            img: [
                CzasNaMasaz_01,
                CzasNaMasaz_02,
                CzasNaMasaz_03
            ],
            stack: [
                HTML,
                CSS,
                JS,
                PHP,
                MySQL
            ]
        },
        {
            id: 'LazyTaste',
            img: [
                LazyTaste_01,
                LazyTaste_02,
                LazyTaste_03
            ],
            stack: [
                HTML,
                SASS,
                JS,
                REACT,
                Node,
                Express,
                MongoDB,
                Mongoose,
                Brain
            ]
        }
    ];
    const fadePage = useSpring({
        delay: 300,
        from: { opacity: 0, translateY: '-100px' },
        to: { opacity: 1, translateY: '0', overflowX: 'hidden', }
    });

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
    }, []);
    document.addEventListener("touchstart", function () { }, true);
    return (
        <div className="wrapper" >
            {isLoading ? <Loading /> :
                <animated.div style={fadePage}>
                    <Header />
                    <About />
                    <SkillSet skillsImages={skillsImages} />
                    <Projects projectsImages={projectsImages} />
                    <Footer />
                </animated.div>}
        </div>
    );
}

export default Portfolio;
