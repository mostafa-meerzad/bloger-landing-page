import React, { useState } from "react";
import {
  ArrowColorfulDown,
  ArrowColorfulUp,
  ArrowLightDown,
  ArrowLightUp
} from "./images";

function NavItem({ title, dropContent }) {
  const [isActive, setIsActive] = useState(false);
  /*  const clickHandler = () => {
    setIsActive((prevState) => !prevState.isActive);
    console.log("test");
  }; */
  return (
    <li>
      <div onClick={() => setIsActive(!isActive)} className="nav-item">
        <span>{title}</span>
        <ArrowColorfulDown className={isActive && "arrow-rotate"} />
        <ArrowLightDown className={isActive && "arrow-rotate"} />
      </div>

      {dropContent && (
        <DropMenu
          dropContent={dropContent}
          className={isActive ? "drop-menu drop-active " : "drop-menu"}
        />
      )}
    </li>
  );
}

const DropMenu = ({ dropContent, className }) => {
  return (
    <menu className={className}>
      {dropContent.map((item, i) => (
        <li key={i} className="drop-item">
          {item.title}
        </li>
      ))}
    </menu>
  );
};

export default NavItem;
