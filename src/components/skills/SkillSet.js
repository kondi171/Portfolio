import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../flow/AppContext';
import ExpandedSkill from './ExpandedSkill';
import Skill from './Skill';

const SkillSet = ({ skillsImages }) => {

  const { skillsData } = useContext(AppContext);
  const [expandedSkillId, setExpandedSkillId] = useState(0);

  useEffect(() => {
    const skillVisibility = document.querySelector('.visibility');
    if (expandedSkillId === 0) {
      skillVisibility.style.visibility = 'hidden';
    } else {
      skillVisibility.style.visibility = 'visible';
    }

  }, [expandedSkillId]);

  return (
    <section id="skillSet" className="skill-set">
      <h2>{Object.keys(skillsData).length !== 0 && skillsData.title}</h2>
      <div className="skills-wrapper">
        {Object.keys(skillsData).length !== 0 && skillsData.skills.map((skill, index) => {
          const { id, title, sizing, description } = skill;
          return <Skill id={id} key={title} img={skillsImages[index].source} title={title} sizing={sizing} description={description} setExpandedSkillId={setExpandedSkillId} />
        })}
      </div>
      <div className="visibility">
        {expandedSkillId && <ExpandedSkill setExpandedSkillId={setExpandedSkillId} skillData={skillsData.skills[expandedSkillId]} skillImages={skillsImages} />}
      </div>
    </section>
  );
}
export default SkillSet;
