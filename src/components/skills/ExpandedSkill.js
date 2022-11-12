import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";
import Skill from './Skill';
import HTML from "../../assets/img/stack/HTML.png";
import CSS from "../../assets/img/stack/CSS.png";
import JS from "../../assets/img/stack/JS.png";
import React from "../../assets/img/stack/React.png";
import SASS from "../../assets/img/stack/SASS.png";
import Node from "../../assets/img/stack/Node.png";
import MongoDB from "../../assets/img/stack/MongoDB.png";
import Git from "../../assets/img/stack/Git.png";
import Bootstrap from "../../assets/img/stack/Bootstrap.png";
import MySQL from "../../assets/img/stack/MySQL.png";
import PHP from "../../assets/img/stack/PHP.png";
import CPP from "../../assets/img/stack/CPP.png";
import Java from "../../assets/img/stack/Java.png";

const ExpandedSkill = ({ setExpandedSkillId, skillData, skillImages }) => {

  const [skillImg, setSkillImg] = useState(null);
  const { skillsData } = useContext(AppContext);
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

    if (skillData.title === "HTML") setSkillImg(HTML);
    else if (skillData.title === "CSS") setSkillImg(CSS);
    else if (skillData.title === "JavaScript") setSkillImg(JS);
    else if (skillData.title === "React.js") setSkillImg(React);
    else if (skillData.title === "SASS/SCSS") setSkillImg(SASS);
    else if (skillData.title === "Node.js") setSkillImg(Node);
    else if (skillData.title === "MongoDB") setSkillImg(MongoDB);
    else if (skillData.title === "Git") setSkillImg(Git);
    else if (skillData.title === "Bootstrap") setSkillImg(Bootstrap);
    else if (skillData.title === "MySQL") setSkillImg(MySQL);
    else if (skillData.title === "PHP") setSkillImg(PHP);
    else if (skillData.title === "C/C++") setSkillImg(CPP);
    else if (skillData.title === "Java") setSkillImg(Java);
  }, [skillData]);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) setExpandedSkillId(null);
  });
  useEffect(() => {

  })
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