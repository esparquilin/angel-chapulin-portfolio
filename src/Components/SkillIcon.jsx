import React from "react";

function SkillIcon(props) {
  return (
    <ul className="icons" style={{ margin: "0", padding: "0" }}>
      <img src={props.icons} alt="icon" className="icons_img icon-box" />
      <div className="onHover">{props.texts}</div>
    </ul>
  );
}

export default SkillIcon;
// {/* <div className="onHover">{props.texts}</div> */}
