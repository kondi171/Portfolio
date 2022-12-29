import { animateScroll as scroll } from "react-scroll/modules";
import caricature from './../../assets/img/avatar/caricature.png'
const Caricature = () => {

    const handleScrollTop = () => {
        scroll.scrollToTop();
    }

    return (
        <img id="caricature" className="caricature" onClick={handleScrollTop} src={caricature} alt="Author caricature" />
    );
}
export default Caricature;