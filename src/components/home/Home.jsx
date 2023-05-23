import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/icons/avatar.svg";
import notification from "../../assets/images/icons/notification.svg";
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
      <div className="content-right">
        <nav>
          <div className="search"></div>
          <input type="text" name="search" id="search" placeholder="Search" />
          <div className="notes-profile">
            <img src={notification} alt="" />
            <img src={avatar} alt="" />
          </div>
        </nav>
        <section className="home">
          <p className="title-home">Notes</p>
          <div className="cards-parent">
            {[1, 2, 3, 4, 5].map((items) => (
              <div key={items} className={"cards-custom color-" + items}>
                <p>Whereas recognition of the inherent dignity</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
