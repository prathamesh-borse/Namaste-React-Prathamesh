# Talk is Cheap, Show me the Code

## Q: Is JSX mandatory for React?
No, JSX is not mandatory for react. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.

Each JSX element is responsible for calling the React.```createElement(component, props, …children)```. By this point the things which we can do using JSX can also done 	with plain Javascript.

Example: 
Code written without JSX?
```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat="World" />);
```

Code written with JSX:
```jsx
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, {toWhat: 'World'}, null));
```

## Q: Is ES6 mandatory for React?
ES6 is not mandatory but it is recommended. Because the latest projects	created on react rely on a lot of ES6. React uses so that’s why you must have knowledge of  features like: ```Classes```, ```Arrow Functions```, ```Variables(let, const)```. ES6 stands for ```ECMAScript 6```. ECMAScript is created for to standardise javascript.

## Q: ```{TitleComponent}``` vs ```{<TitleComponent/>}``` vs ```{<TitleComponent></TitleComponent>}``` in JSX

The Difference is stated below:

- ```{TitleComponent}```: This value describes the TitleComponent as a javascript expression or a variable or React element. The {} can embed a javascript expression or a variable or React element inside it.

- ```<TitleComponent/>```: This value represents a Component that is basically returning 
Some JSX value. In simple terms TitleComponent a function that is returning a JSX 
value. If component is written inside the {< />} expression.

- ```<TitleComponent></TitleComponent>```: ```<TitleComponent />``` and 
```<TitleComponent></TitleComponent>``` are equivalent only when 
< TitleComponent /> has no child components. The opening and closing tags are 
created to include the child components.


## Q: How can i write comments in jsx?
JSX comments can be written as follows: 
- ```{/* */}``` = single/multiline comment in jsx. 
## Example: 
    
    {/* single line comment */}
    {/* 
       multi 
       line 
       comment 
    */}
    

## Q: What is ```<React.Fragment></React.Fragment>``` and ```<></>```
It is a component which is exported by React. 
Groups list of children without adding extra nodes to the DOM.

```jsx
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )

    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
```

## Q: What is ```Virtual DOM```?
- The Virtual DOM is the React Secret weapon! We can imagine it as lightweight, in-memory snapshot of our webpage UI.
- When some changes happens, React will first update the Virtual DOM with minimal edits and then figures out what to display on the webpage ui which will be in sync.
- We need Virtual DOM for Reconciliation.

## Q: What is ```Reconciliation```?
- It takes the updated Virtual DOM and figures out the most efficient way to bring the real DOM.
- It uses ```Diff Algorithm``` to figure what needs to display and what does not needs to be displayed on the UI.
- To find the difference between the one tree (Actual DOM) and Other (Virtual DOM)

## Q: What is ```React Fiber```?
React Fiber is the internal reconciliation engine. which is built for speed and flexibility.
It is responsible for diff algorithm.
While Reconciliation is the ```what``` upating the dom, so the React Fiber is ```how``` it can be done in efficient and flexible way.

## Q: Why we need keys in React? When do we need keys in React?
- A ```key``` is a special attribute which needs to be included inside when created lists or array.
- When we have array/list of elements which needs to be modified, inserted or deleted then to uniquely identify that item from it's siblings we must have to use keys in it.
- A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the ```key``` lets React identify the item throughout its lifetime.

Example:

```html
<li key={0}>First Item</li>
<li key={1}>Second Item</li>
<li key={2}>Third Item</li>
```

## Q: Can we use index as keys in React?
Yes, we can index as keys. But it is not generally recommended. Because if the list is dynamic and the items are changing, and are added or removed then using indexes as keys can lead to unexpected behavior in certain situations.

Example:

1. Using index as keys
```jsx
const MyComponent = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

2. Using unique identifiers as keys
```jsx
const MyComponent = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);
```

## Q: What is ```Props``` in React?
Props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

Example:
```jsx
function App() {
    return (
        <div className="App">
           <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
        </div>
    )
}
``` 

## Q: What is Config Driven UI?
- A config-driven UI is a design approach where the behavior and appearance of a UI are determined primarily by configuration settings rather than hard-coded logic. 
- This means that aspects like layout, styles, data presentation, and even certain functionalities can be easily customized or modified by adjusting configuration files or settings, without requiring changes to the underlying codebase.
- In simpler terms, think of it like adjusting settings on your phone to change how your home screen looks or functions. Instead of rewriting the code for each change, you simply adjust settings in a configuration menu.

