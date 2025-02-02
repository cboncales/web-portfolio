import React, { useState } from "react";

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
  return (
    <section className="contacts">
      <div className="title">This is my Contacts</div>
      <div className="des">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quis
        accusantium excepturi? Eligendi libero unde eaque corrupti. Possimus,
        illum porro esse amet, sunt perspiciatis labore explicabo aspernatur
        laborum facilis repudiandae?
      </div>
      <div className="list">
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
