import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import plusIcon from "../../assets/images/icons/plus.svg";
import "./_home.scss";
import { CSSTransition } from "react-transition-group";

const Home = () => {
  const [showInitCard, setShowInitCard] = useState();
  const nodeRef = useRef(null);

  return (
    <div className="main-container">
      <div className="sidebar">
        <img src={logo} alt="logo" className="logo" />
        <CSSTransition
          nodeRef={nodeRef}
          in={showInitCard}
          timeout={200}
          classNames="my-node"
        >
          <div
            ref={nodeRef}
            className={`${showInitCard ? "active" : ""} plus-btn`}
            onClick={() => setShowInitCard((current) => !current)}
          >
            <img src={plusIcon} alt="plus-icon" />
          </div>
        </CSSTransition>
        <div className={`${showInitCard ? "active" : ""} round-parent`}>
          {[1, 2, 3, 4, 5].map((items) => (
            <span key={items} className={"color-" + items}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
