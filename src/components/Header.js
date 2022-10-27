import { useEffect, useState } from 'react';
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
    return (
        <header className="header">
            <Nav />
            <div className="header__title">
                <span>Junior</span>
                <span>{titles[titleIndex]}</span>
                <span>Developer</span>
            </div>
            <div className="header__image">
                <hr />
                <img src={Konrad} alt="#" />
                <hr />
            </div>
            <span className="header__author">Konrad Nowak</span>
        </header>
    );
}
export default Header;