import { useState, useContext } from 'react';
import { AppContext } from '../../AppContext';
import ExpandedSkill from './ExpandedSkill';
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

const SkillSet = () => {

  const { skillsData } = useContext(AppContext);
  const [expandedSkillId, setExpandedSkillId] = useState(0);
  const skillImages = [
    HTML,
    CSS,
    JS,
    React,
    SASS,
    Node,
    MongoDB,
    Git,
    Bootstrap,
    MySQL,
    PHP,
    CPP,
    Java,
  ];
  return (
    <section id="skillSet" className="skill-set">
      <h2>{Object.keys(skillsData).length !== 0 && skillsData.title}</h2>
      <div className="skills-wrapper">
        {Object.keys(skillsData).length !== 0 && skillsData.skills.map((skill, index) => {
          const { id, title, sizing, description } = skill;
          return <Skill id={id} key={title} img={skillImages[index]} title={title} sizing={sizing} description={description} setExpandedSkillId={setExpandedSkillId} />
        })}
      </div>
      {expandedSkillId && <ExpandedSkill setExpandedSkillId={setExpandedSkillId} skillData={skillsData.skills[expandedSkillId]} skillImages={skillImages} />}

    </section>
  );
}
export default SkillSet;
