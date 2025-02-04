import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

const Contact = () => {
  const [ListContacts] = useState([
    {
      title: "Phone Number",
      value: "+639486994790",
    },
    {
      title: "Email",
      value: "clarkboncales115@gmail.com",
    },
    {
      title: "Facebook",
      value: "Clark Boncales",
    },
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className="Contact" ref={refTab}>
      <div className="title" ref={(eL) => eL && divs.current.push(eL)}>
        This is my Contacts
      </div>
      <div className="des" ref={(eL) => eL && divs.current.push(eL)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quis
        accusantium excepturi? Eligendi libero unde eaque corrupti. Possimus,
        illum porro esse amet, sunt perspiciatis labore explicabo aspernatur
        laborum facilis repudiandae?
      </div>
      <div className="list" ref={(eL) => eL && divs.current.push(eL)}>
        {ListContacts.map((value, key) => (
          <div key={key} className="item">
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
