import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [listProjects] = useState([
    {
      name: "UniTrade",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      mission:
        "Frontend Developer and Backend Developer, System Analyst and UI/UX Designer",
      language: "HTML5, CSS3, Bootstrap, JavaScript, Supabase, Figma",
      images: "./images/unitrade.png",
    },
    {
      name: "Cafezy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      mission:
        "Frontend Developer and Backend Developer, System Analyst and UI/UX Designer",
      language: "VueJS, Vuetify, Supabase, Figma",
      images: "./images/cafezy.jpg",
    },
    {
      name: "Library Management System",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus perferendis eum, non dolore nesciunt quia veritatis iure fugit distinctio qui ab, nostrum facere vel expedita aut, asperiores optio mollitia.",
      mission:
        "Frontend Developer and Backend Developer, System Analyst and UI/UX Designer",
      language: "Django, Bootstrap",
      images: "./images/library.png",
    },
  ]);
  return (
    <section className="Projects">
      <div className="title">This is my Projects</div>
      <div className="des">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        architecto eaque autem molestias dolorum quasi blanditiis quod fuga
        modi. Quas nostrum labore consequuntur ratione reiciendis optio suscipit
        repellendus laboriosam aspernatur.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div key={key} className="item">
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="de">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <div>
                    <FontAwesomeIcon icon={faEarthAmericas} />
                  </div>
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="de">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
