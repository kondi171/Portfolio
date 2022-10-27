import Skill from './Skill';
import HTML from "../../assets/img/stack/HTML.png";
import CSS from "../../assets/img/stack/CSS.png";
import JS from "../../assets/img/stack/JS.png";
import React from "../../assets/img/stack/React.png";
import SASS from "../../assets/img/stack/SASS.png";
import Node from "../../assets/img/stack/Node.png";
import MongoDB from "../../assets/img/stack/MongoDB.png";
import Git from "../../assets/img/stack/Git.png";
import NPM from "../../assets/img/stack/NPM.png";
import Bootstrap from "../../assets/img/stack/Bootstrap.png";
import MySQL from "../../assets/img/stack/MySQL.png";
import PHP from "../../assets/img/stack/PHP.png";
import CPP from "../../assets/img/stack/CPP.png";
import Java from "../../assets/img/stack/Java.png";
import { useState } from 'react';
import ExpandedSkill from './ExpandedSkill';

const SkillSet = () => {
  const skills = [
    {
      id: 'skill1',
      img: HTML,
      title: 'HTML',
      sizing: 'vertical',
      description: 'Znajomość opisowego języka HyperText Markup Language umożliwiająca pisanie semantycznego kodu dobrze interpretowanego przez boty indeksujące. Świadomość projektowania struktury projektu dla urządzeń desktopowych oraz mobilnych. Umiejętność poprawnego zagnieżdżania elementów, a także świadomość o zależnościach pomiędzy nimi. Stałe podnoszenie kompetencji w standardzie HTML 5.'
    },
    {
      id: 'skill2',
      img: CSS,
      title: 'CSS',
      sizing: 'vertical',
      description: 'Posługiwanie się Cascading Style Sheets w stopniu umożliwiającym projektowanie stron internetowych na urządzenia desktopowe oraz mobilne z zachowaniem zasad RWD w konwencji Dekstop first oraz Mobile first. Znajomość właściwości transform i transition do podstawowych animiacji oraz dyrektywy keyframes do zaawansowanych animacji. Umiejętność pozycjonowania za pomocą właściwości position oraz projektowania struktury za pomocą flexboxa. Umiejętność wykorzystania kombinatorów CSS oraz znajomość pojęcia specyficzności selektorów. Świadomość funkcjonowania stylów domyślnych w przeglądarkach. Umiejętność oddzielenia warstwy strukturalnej od warstwy wizualnej. Znajomość pseudoklas i pseudoelementów.'
    },
    {
      id: 'skill3',
      img: JS,
      title: 'JavaScript',
      sizing: 'vertical',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill4',
      img: React,
      title: 'React.js',
      sizing: 'vertical',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill5',
      img: SASS,
      title: 'SASS/SCSS',
      sizing: 'vertical',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill6',
      img: Node,
      title: 'Node.js',
      sizing: 'horizontal',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill7',
      img: MongoDB,
      title: 'MongoDB',
      sizing: 'horizontal',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill8',
      img: Git,
      title: 'Git',
      sizing: 'vertical',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill9',
      img: NPM,
      title: 'NPM',
      sizing: 'horizontal',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill10',
      img: Bootstrap,
      title: 'Bootstrap',
      sizing: 'vertical',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill11',
      img: MySQL,
      title: 'MySQL',
      sizing: 'horizontal',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill12',
      img: PHP,
      title: 'PHP',
      sizing: 'horizontal',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill13',
      img: CPP,
      title: 'C/C++',
      sizing: 'vertical',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
    {
      id: 'skill14',
      img: Java,
      title: 'Java',
      sizing: 'vertical',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cumque accusantium exercitationem nihil voluptatibus eaque laboriosam harum corporis blanditiis. Fuga atque, aliquam exercitationem nihil expedita mollitia deserunt similique, voluptas repellendus accusantium voluptate recusandae molestiae tempore repellat a non earum! Consequatur vel numquam corporis eos deserunt eius odit expedita ipsa explicabo?'
    },
  ];
  const [expand, setExpand] = useState('');
  return (
    <section id="skillSet" className="skill-set">
      <h2>Skills</h2>
      <div className="skills-wrapper">
        {skills.map(skill => {
          const { id, img, title, sizing, description } = skill;
          return <Skill id={id} key={title} img={img} title={title} sizing={sizing} description={description} expand={expand} setExpand={setExpand} />
        })}
      </div>
      {/* <ExpandedSkill /> */}

    </section>
  );
}
export default SkillSet;
