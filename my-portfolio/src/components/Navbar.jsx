import React from "react";
import { use } from "react";

const Navbar = () => {
  const [ListNav] = use(["home", "skills", "projects", "contact"]);
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <nav>
        {ListNav.map((value, key) => (
          <span></span>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
