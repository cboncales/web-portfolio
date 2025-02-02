import React, { useState } from "react";
import { use } from "react";

const Navbar = () => {
  const [ListNav] = useState(["home", "skills", "projects", "contact"]);
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <nav>
        {ListNav.map((value, key) => (
          <span key={key}>{value}</span>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
