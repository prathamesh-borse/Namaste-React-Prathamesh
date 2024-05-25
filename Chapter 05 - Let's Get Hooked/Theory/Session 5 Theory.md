# Let's Get Hooked

## Q: What is difference between Named Export, Default Export and * as export?
1. Named Export
<br/>A file can have as many named exports as you like. Named exports are used when a file exports multiple components or values

```javascript
export function add(int a, int b) {
    return a + b;
}

export function substract(int a, int b) {
    return a - b;
}
```

To use the above function in the react file, we need to use curly braces to import both of these functions:
```javascript
// App.js
import React from 'react';
import { add, subtract } from './utils'; // import the utility functions

function App() {
  return (
    <div>
      <p>{add(2, 3)}</p>
      <p>{subtract(5, 2)}</p>
    </div>
  );
}

export default App;
```

2. Default Export
<br/>A file can not have more than one default export. The Default export is used when a file exports only one component.

```javascript
// Message.js
import React from 'react';

const Message = () => {
  return <div>Hello React!</div>;   
}

export default Message;
```

To import the above component, we use below syntax:
```javascript
import Message from "./Message";
```

3. <b>* as export</b>
<br/> Is used when an file contains more than one exports. Instead of getting separate export functions inside the curly braces, we use * to get all the export functions. 

## Q: What is the importance of config.js file?
1. By using config.js we can make our code cleaner and also instead writing hardcoded values in code we can keep them inside the config.js file and get it from there and use it inside our code.
2. In config.js fil we also define environment variables through which we are getting the api data.
3. For the security config.js file is very useful because we can store our API secrets, key and other environment variables inside it.

## Q: What are React Hooks?
The React Hooks are the functions that lets you hook into React state and it's lifecycle features from the function components. We cannot use React Hooks inside the classes. React provides built-in hooks like <b>useState</b>

## Q: Why do we need a useState Hook?
```useState hook``` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the ```initial state``` as an ```argument``` and ```returns an array``` of two entries.

### Syntax for useState hook:
```javascript
const [state, setState] = useState(initialState);
```

### Importing: To use useState you need to import useState from react as shown below:
```javascript
import React, { useState } from "react";
```

we can make use Hooks in Functional Components like below:
```javascript
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```