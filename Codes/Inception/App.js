/*

<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
]);

console.log("Parent: ", parent);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello From React!"
);
// {} = where we specify the attributes our element.

// heading = is the react javascript object in which we have props and childern of react

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// render = basically getting the heading react javascript object and converting it into the h1 heading tag
// and adding inside the DOM tree of html inside the webpage.
