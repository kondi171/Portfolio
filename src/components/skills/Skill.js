import { useState, useEffect, useContext } from "react";
import { AppContext } from "../flow/AppContext";

const Skill = ({ id, img, title, description, sizing, setExpandedSkillId }) => {

    const { skillsData } = useContext(AppContext);

    const [expandedSkillContent, setExpandedSkillContent] = useState(false);

    const expandText = () => {
        if (window.innerWidth >= 1024) setExpandedSkillContent(false);
        else return setExpandedSkillContent(true);
    }

    window.addEventListener('resize', () => {
        expandText();
    });

    const handleExpand = e => {
        const id = e.target.dataset.id;
        setExpandedSkillId(id.slice(5, id.length));
    }

    useEffect(() => {
        expandText();
    }, []);
    return (
        <div id={`skill${id}`} className="stack-item">
            <div className="image">
                <img className={`stack-item__image stack-item__image--${sizing}`} src={img} alt={`${title} logo`} />
            </div>
            <span className="stack-item__title">{title}</span>
            {expandedSkillContent ?
                <p className="stack-item__description" dangerouslySetInnerHTML={{ __html: description }}></p> :
                <p className="stack-item__description" dangerouslySetInnerHTML={{ __html: description.slice(0, 300) + '...' }}></p>
            }
            <button data-id={`skill${id}`} onClick={e => handleExpand(e)} className="stack-item__expand"><span data-id={`skill${id}`} className="visible">{skillsData.buttonRead}...</span><span data-id={`skill${id}`} className="invisible">{skillsData.buttonClick}!</span></button>
        </div>
    );
}
export default Skill;