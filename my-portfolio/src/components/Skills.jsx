import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faVuejs,
  faPython,
  faBootstrap,
  faNodeJs,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  const [ListSkills] = useState([
    {
      name: "Bootstrap",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      icon: faBootstrap,
    },
    {
      name: "VueJS",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      icon: faVuejs,
    },
    {
      name: "ReactJS",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      icon: faReact,
    },
    {
      name: "Java",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      icon: faJava,
    },
    {
      name: "NodeJS",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      icon: faNodeJs,
    },
    {
      name: "Python",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      icon: faPython,
    },
  ]);
  return (
    <section className="Skills" ref={refTab}>
      <div className="title" ref={(eL) => eL && refDivs.current.push(eL)}>
        This is my Tech Stack
      </div>
      <div className="dev" ref={(eL) => eL && refDivs.current.push(eL)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad suscipit
        culpa eveniet excepturi obcaecati cupiditate temporibus quam ea incidunt
        placeat, quo in numquam. Consequuntur quo reiciendis accusamus doloribus
        ut maxime.
      </div>
      <div className="list" ref={(eL) => eL && refDivs.current.push(eL)}>
        {ListSkills.map((value, key) => (
          <div key={key} className="item">
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
