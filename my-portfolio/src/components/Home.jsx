import React, { useRef } from "react";
import CustomHook from "./CustomHook";

const Home = () => {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className="Home" ref={refTab}>
      <div className="content">
        <div className="name">
          My Name is <span>CLARK</span>
        </div>
        <div className="des">
          I'm a 3rd year BSIT student at the Caraga State University. I'm a web
          developer and mobile developer. I'm also a graphic designer and a
          video editor.
        </div>
        <a
          href="https://www.dropbox.com/scl/fi/x0k0gqpwxobhrfhhmsb2v/Boncales-Clark-CV.pdf?rlkey=6dcxkbhenqy3qqfj041codwhz&st=9nwdfh2s&dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="./images/formal-edited.png" alt="" />
          <div className="info">
            <div className="">Developer</div>
            <div className="">Filipino</div>
            <div className="">04/09/01</div>
            <div className="">Male</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
