import "./style.css";
import { useState } from "react";
const User = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [compID, setCompID] = useState();
  // console.log(compID);
  return (
    <div className="user">
      <div
        className="header"
        onClick={() => {
          setIsActive(!isActive);
          setCompID(props.id);
          props.isOpenId.setIsOpenId(props.id)
        }}
      >
        <h1>{props.title}</h1>
        <span>{`${isActive ? "-" : "+"} `}</span>
      </div>
      {props.isOpenId.isOpenId === compID && isActive && (
        <div className="">
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
};
export default User;
