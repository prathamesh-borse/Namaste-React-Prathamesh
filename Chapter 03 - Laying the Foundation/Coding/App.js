import React from "react";
import ReactDOM from "react-dom/client";

// JSX  = HTML-like syntax
// JSX => React.createElement => ReactElement- JS Object => HTML Element (render)
const Title = () => {
  return (
    <h1 id="heading" className="head">
      Namaste React using JSX🚀
    </h1>
  );
};

// React Component
// 1. Class Based Component = OLD Way
// 2. Functional Component = New Way

// React Functional Component
// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>Namaste React Functional Component 🚀</h1>
    </div>
  );
};

const HeadingComponent2 = () => <h1>Namaste React Functional Component 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
