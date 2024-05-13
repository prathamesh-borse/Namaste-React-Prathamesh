import React from "react";
import ReactDOM from "react-dom/client";
import Youtube from "./images/youtube.png";
import User from "./images/user.png";

const MainComponent = () => {
  return (
    <div className="main">
      <div className="youtube">
        <img src={Youtube} alt="Youtube Logo" />
      </div>
      <div>
        <input type="text" placeholder="Search" className="inputSearch" />
      </div>
      <div className="user">
        <img src={User} alt="User Logo" />
      </div>
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div id="parent">
      <MainComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
