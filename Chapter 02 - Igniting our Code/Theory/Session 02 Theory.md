## Q: What is NPM?
Node Package Manager ❌ Repository of standard packages ✅
</br>Npm is the repository where all the standard packages are installed.
Npm is everything but it is not the node package manager.

## Q: What is parcel/webpack? why do we need it?
The most important dependency we need inside our project is the bundler and before into the production our code needs to be minified.
The parcel/webpack is the bundler which we can use inside our project to minify the HTML, CSS,  JS and images file to Bundle our large files into smaller version of the code we need parcel/webpack dependency inside our project.

## Q: What is .parcel-cache?
It is cache file that our parcel the bundler which is using it to bundle the codes so that 	 next time when it is starting bundling it will require less time to bundle (compile) it.

<b>bundle</b> = compile the code into smaller chunk of size

## Q: What is NPX?
Npx is the node package runner it helps developers to run packages without even installing into the system.
Npx is primarily command line tool which helps to run any node.js packages without even installing them. 

npx = node package execute         
```npx parcel build index.html``` = build the production bundle. 

## Q: What is difference between dependencies and devdependencies?
<b>Dependencies</b> 
<br>These are the normal dependencies which can be used inside the 	  production also. These are the libraries you need when you run your code.

<b>Devdependencies</b> 
<br>Which will be used in the development phase. These dependencies are needed at some point during the development phase but not 	  during the execution.

## Q: What is Tree Shaking?
The process of eliminating the dead code before it can go inside the bundle this process is called tree-shaking.
Dead code is the code that aren’t useful in our application so it can be removed before going inside the bundle to reduce the size of the bundle. 

## Q: What is Hot Module Replacement?
It allows developers to update parts of an application in real Time without actually reloading the whole page or adding some manual intervention.
<br>Instead of reloading the whole page, HMR identifies the changes which are modified and updates only those changes in the browser.
<br>HMR is powerful tool which helps to preserve the original state of the application. HMR is powerful tool for interactive development and testing. 

## Q: List down 5 superpowers of parcel and describe any 3 of them in your words?
<b>Superpowers</b>
1. Consistent Hashing
2. Hot Module Replacement
3. Minification
4. Local Server
5. Bundling

<b>Local Server:</b>
<br>Parcel provides an local server through which application can be hosted in a server and test that application. 
Local Server is also helpful testing the features of an application in real time and test those changes using the console.
Allowing us to see the changes of our application without actually reloading the whole page.

## Q: What is `.gitignore`? What should we add and not add into it?
The .gitignore is useful in a way it will not host/push the changes/folder we put inside this folder.
Because of this our repository look cleaner and as well when our code goes to the production so it will have only the necessary things which can be retired when we delete them from our project.
<br>Rule: <b>Whatever you can regenerate don't put it on the git. It should only have essential things.</b>

## Q: What is the difference between `package.json` and `package-lock.json`?
<b>package.json</b>
1. It is the configuration file for our npm
2. It contains all the necessary information about the dependencies and also about our project.
3. This file also contains the version of the dependencies which are specified inside the package.json

<b>package-lock.json</b>
1. It locks down the specific versions of every installed package, preventing unintended updates.
2. It ensures that every developer working on this project will have the exact same version of the dependencies and resolves ‘it works on my machine’ issues. 
3. By using the package.json & package-lock.json we can reinstall node_modules folder hence we developer are warned not to modify the package-lock.json.

## Q: What is `node_modules` ? Is it a good idea to push that on git?
node_modules is basically the collection of the dependencies which are installed when we install any dependency using the npm command.
<br>In the folder the dependencies are installed they are dependent to each other and some of the dependency are installed from the relationship to each other.
<br>And due to the bulky dependencies which are installed in the node_modules it is advised that we do not put this folder onto the git.
<br>Because we can regenerate this folder using package.json and package-lock.json this two files.

## Q: What is the ```dist``` folder?
The /dist stands for distributable. The /dist folder contains the minimised version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

## Q: What is browserlist?
Browserlists is the dependency package in which we can specify support for our application.
<br><b>browserlist.dev</b> = is the website in which we can check the browser compatibility for our application in the percentage.

## Q: Read about: ^ - caret and ~ - tilda
~ = Approximately equivalent to version, i.e., only accept new patch versions 
<br>^ = Compatible with version, i.e., accept new minor and patch versions 

## Q: Different types of Script Tag in HTML? 
1. async
   This attribute specifies that the script is downloaded in parallel to parsing the page, and will be executed as soon as available (before parsing completes) (only for external scripts)

   ```jsx
   <!DOCTYPE html>
   <html>
   <body>
   <h1>The script has async attribute</h1>
   <p id="p1">Hello, World!</p>
   <script src="demo_async.js" async>
   </body>
   </html>
   ```    
   The above html code is executing and it is also downloading the <b>demo_async.js</b> this script is downloaded in parallel when this html page is parsed inside the browser.

2. Crossorigin
 * It will set mode of the request to an HTTP CORS Request. 
 * This is used when we want to request and load the resources from other servers.  

 ```js
 <script src="https://code.jquery.com/jquery-3.7.1.slim.js" integrity="sha256-UgvvN8vBkgO0luPSUl2s8TIlOSYRoGFAX4jlCIm9Adc=" crossorigin="anonymous"></script>
 ```

3. src
 * Specifies the URL of an external file
 ```js
 <script src="./app.js"></script>
 ``` 

4. Type
 * Specifies the media type of the script
 
 ```jsx
 <!DOCTYPE html>
 <html>
 <body>
 <h1>The script Type attribute</h1>

 <p id="demo"></p>

 <script type="application/javascript">
 document.getElementById('demo').innerHTML = "Hello, JavaScript";
 </script>
 </body>
 </html>
 ```

 The above script tag is telling the code written is the type of javascript and there we are getting paragraph attribute with id demo and adding text inside the paragraph using javascript. 