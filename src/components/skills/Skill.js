import { useEffect, useState } from "react";

const Skill = ({ id, img, title, description, sizing, expand, setExpand }) => {

    const [width, setWidth] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const expandText = () => {
        if (width >= 1024) return false;
        else return true;
    }

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    });

    const handleExpand = () => {
        setModalOpen(true);
        setExpand(expand);
        const skillCard = document.getElementById(id);
        skillCard.classList.add('layer');
        const skillSet = document.querySelectorAll('.stack-item');
        skillSet.forEach(skill => skill.classList.remove('stack-item--expand'));

        const selectedSkill = skillCard.firstChild.nextSibling.textContent;
        if (selectedSkill === title) {
            document.body.style.overflowY = 'hidden';
            skillCard.classList.add('stack-item--expanded');
        }
    }

    const handleCollapse = () => {
        setModalOpen(false);
        const skillSet = document.querySelectorAll('.stack-item');
        skillSet.forEach(skill => skill.classList.remove('stack-item--expanded'));
        document.body.style.overflowY = 'visible';
    }

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <div id={id} className="stack-item">
            <div className="image">
                <img className={`stack-item__image stack-item__image--${sizing}`} src={img} alt={`${title} logo`} />
            </div>
            <span className="stack-item__title">{title}</span>
            <p className="stack-item__description">
                {width <= 1024 ?
                    description : <>{modalOpen ? description : description.slice(0, 300) + '...'}</>
                }</p>
            {modalOpen ?
                <button onClick={handleCollapse} className="stack-item__expand"><span className="visible">Zakończ czytanie...</span><span className="invisible">Kliknij!</span></button>
                : <button onClick={handleExpand} className="stack-item__expand"><span className="visible">Czytaj dalej...</span><span className="invisible">Kliknij!</span></button>
            }
        </div>
    );
}
export default Skill;