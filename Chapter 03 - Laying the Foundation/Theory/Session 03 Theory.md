## Q: What is JSX?
 JSX is a syntax extension for JavaScript that lets you write HTML like markup inside a JavaScript file. 
 Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

## Q: What are the superpowers of JSX?
1. JSX Syntax: The HTML-Like Syntax makes it easier for developers to understand and visualise ui.
2. Embedding Expression: By using JSx we can directly add Javascript 	expression inside {} (curly braces)      allowing dynamic  content rendering.
3. Props and State Binding: JSX simplifies the binding of props and state to components, making it intuitive to pass data and manage component state.	
4. Component Composition: JSX allows the composition of components 	by allowing them to be nested with each other, promoting modular and reusable code structure. 
5. Event Handling: JSX supports event handling by allowing developers to attach event listeners directly to elements, making interactive user interfaces easy to implement.
6. Inline Styles: JSX supports inline styling through the style attribute, allowing developers to apply CSS styles directly to elements using JavaScript objects.
7. Static Type Checking: JSX can be statically type-checked using tools like TypeScript or Flow, providing additional safety and code clarity.
8. Tooling Support: JSX is well-supported by a variety of developer tools, including syntax highlighting and code formatting, enhancing the developer experience.

## Q:  {TitleComponent} vs {<TitleCompoent/>} vs {<TitleComponent><TitleComponent/>} in JSX?
1. ```{TitleComponent}```:
	This syntax imports the TitleComponent directly as a variable or constant.
	When used in JSX, it renders the TitleComponent without any additional markup.
	It's suitable when you just want to render the component without any surrounding tags.

2. ```{ <TitleComponent/> }```:
	This syntax directly renders the TitleComponent as a JSX element.
	It's essentially the same as using <TitleComponent/>, but enclosed within curly braces {}.
	It's suitable when you want to render the component directly without any surrounding text or components.

3. ```{<TitleComponent></TitleComponent>}```:
	This syntax also renders the TitleComponent as a JSX element, but explicitly using opening and closing tags.
	It's functionally equivalent to {<TitleComponent/>} but with explicit opening and closing tags.
	It's suitable when you want to include additional content or other JSX elements within or around the TitleComponent.