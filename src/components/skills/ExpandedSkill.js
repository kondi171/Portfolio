import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";

const ExpandedSkill = ({ setExpandedSkillId, skillData, skillImages }) => {

  const [skillImg, setSkillImg] = useState(null);
  const { skillsData, theme } = useContext(AppContext);
  const handleCollapse = () => {
    const modal = document.getElementById('modal');
    const overlay = document.querySelector('.modal-overlay');
    modal.style.transform = 'scale(0)';
    modal.style.transitionDuration = '0.4s';
    overlay.style.opacity = 0;
    overlay.style.transitionDuration = '0.4s';
    setTimeout(() => {
      setExpandedSkillId(null);
    }, 400);
  }

  useEffect(() => {
    const modal = document.getElementById('modal');
    const overlay = document.querySelector('.modal-overlay');
    overlay.style.opacity = 0.9;
    overlay.style.transitionDuration = '0.4s';
    modal.style.transform = 'scale(1)';
    modal.style.transitionDuration = '0.4s';
    const expandedSkillImage = skillImages.find(img => skillData.title === img.title);
    setSkillImg(expandedSkillImage.source);
  }, [skillData, skillImages]);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) setExpandedSkillId(null);
  });

  useEffect(() => {
    const newTheme = theme === 'Lambda' ? 'Abyss' : 'Lambda';
    console.log(newTheme);
    const skill = document.querySelector('.stack-item--modal');
    const strongs = document.querySelectorAll('.stack-item--modal strong');
    skill.dataset.theme = newTheme;
    strongs.forEach(strong => strong.dataset.theme = newTheme);
    for (let i = 0; i < skill.childNodes.length; i++) {
      skill.childNodes[i].dataset.theme = newTheme;
    }
  }, [theme]);
  return (
    <div className="modal-overlay">
      <div id="modal" className="stack-item stack-item--modal">
        <div className="image">
          <img className={`stack-item__image stack-item__image--${skillData.sizing}`} src={skillImg} alt={`${skillData.title} logo`} />
        </div>
        <span className="stack-item__title">{skillData.title}</span>
        <p className="stack-item__description" dangerouslySetInnerHTML={{ __html: skillData.description }}></p>
        <button onClick={handleCollapse} className="stack-item__expand"><span className="visible">{skillsData.buttonClose}...</span><span className="invisible">{skillsData.buttonClick}!</span></button>
      </div>
    </div>

  );
}
export default ExpandedSkill;