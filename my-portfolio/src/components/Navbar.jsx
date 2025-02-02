import React, { useState } from "react";
import { connect } from "react-redux";
import { changeTabActive } from "../redux/action";

const Navbar = ({ activeTab }) => {
  const [ListNav] = useState(["home", "skills", "projects", "contact"]);
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <nav>
        {ListNav.map((value, key) => (
          <span key={key} className="">
            {value}
          </span>
        ))}
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(Navbar);
