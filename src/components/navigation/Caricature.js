import { useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import caricature from './../../assets/img/avatar/caricature.png'
import caricatureHover from './../../assets/img/avatar/caricature-hover.png';
const Caricature = () => {

    const [avatarHover, setAvatarHover] = useState(false);

    const handleAvatarHovered = () => {
        const img = document.getElementById('caricature');
        img.style.opacity = 0;
        setTimeout(() => {
            img.style.opacity = 1;
            setAvatarHover(!avatarHover);
        }, 200);
    }

    const handleAvatarUnhovered = () => {
        const img = document.getElementById('caricature');
        img.style.opacity = 0;
        setTimeout(() => {
            img.style.opacity = 1;
            setAvatarHover(!avatarHover);
        }, 200);
    }
    const handleScrollTop = () => {
        scroll.scrollToTop();
        setAvatarHover(false);
    }

    return (
        <img id="caricature" onMouseEnter={handleAvatarHovered} onMouseLeave={handleAvatarUnhovered} className="caricature" onClick={handleScrollTop} src={avatarHover ? caricatureHover : caricature} alt="Caricature" />
    );
}
export default Caricature;