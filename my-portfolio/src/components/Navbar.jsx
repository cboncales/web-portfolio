import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";

const Navbar = ({ activeTab }) => {
  const [ListNav] = useState(["Home", "Skills", "Projects", "Contact"]);
  const dispatch = useDispatch();
  const changeTab = (value) => {
    dispatch(changeTabActive(value));
  };
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <nav>
        {ListNav.map((value, key) => (
          <span
            key={key}
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
          >
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
