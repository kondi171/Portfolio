import { animateScroll as scroll } from "react-scroll/modules";
import { useContext } from "react";
import { AppContext } from "../flow/AppContext";
import caricatureLambda from './../../assets/img/avatar/caricature-lambda.png';
import caricatureAbyss from './../../assets/img/avatar/caricature-abyss.png';

const Caricature = () => {
    const { theme } = useContext(AppContext);

    const handleScrollTop = () => scroll.scrollToTop();

    return (
        <img id="caricature" className="caricature" onClick={handleScrollTop} src={theme === 'Lambda' ? caricatureLambda : caricatureAbyss} alt="Author caricature" />
    );
}
export default Caricature;