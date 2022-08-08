// What is NPM?

//NPM : node package manager . It provides two main functionalities.
//Online repository for node.js packages/modules.
//comand line utility for node.js packages , do version managment and dependency managment of node.js packages.

//What are the modules in Node.js?

//module is a block of code that provides a simple/complext functionality that can communicate with external application.
//in node.js, there are 3 modules.

//Core modules: 
//that are built-in modules. the module system built around a require function.
//This function is used to load and get acess to its content to the application.
//require is a globel variable we can use it anyware in the application.require() function will return javascript type depending on module.

//Local module: 
//That are created by you.writing all code in a single page is not a good idea. so to make it reusable and readeble we will create local module.
//we can export the local module using module.export and we can import by using reqiure().

//Third-party modules: 
//Third-party modules can be installed from the NPM(node package manager)
//firstly we need to intilize npm using npm init command . It will create a package.json in root directory.it stores all the modules from third party modules.

//What is the purpose of the module.exports?

//module.export is used to export our module in node.js to make it use by other modules. to make it use gobally in application.

//Difference between default export and named export

//default export: default export is normal export look like module.export = filename;
//named export: export export is like exporting the module by assigning name to that module look like module.exports.assign = filename. we have to import this exported file with the name assigned to that file while exporting it.

//How do you import any module in Node.js?

//we should import any module in node.js using require() function . require() is a globel variable.reqiure() method will return a javascript type depending on module.

//What are the different types of HTTP requests?

//we have six HTTP requests methods,
//get
//post
//put
//patch:patch is idenical to the put, with the exception that it alters a portion of the data.
//delete

//Explain the concept of middleware in Node.js?

//middleware are often used in context of express.js freamwork . middleware having acess to request and response objects.
//middle ware perform following operations
//execute any code
//make changes to request and response object.
//end request and response cycle.call the next middleware function in the stack.

//Explain CORS?

//CORS : 
//CORS stands for cross origin resource service. when our project using third party resources like api or data from server other than it's own origin the CORS will provide an origin to the application to access the data.
//if you are not using CORS it will through CORS error.
//We should import CORS 
//npm i CORS

//What is Express. how it helps you to create a backend application?

//Express: Express is a popular web freamwork used to manage server side data and routing to route different pages.
//that provides a robust set of features to develop web and mobile freamwork.
//the following are some of key features of express.
//express allows to set up middlewares to respond to http requests.
//define routing table to perform different actions based on http method and url.allows to dynamically render html based on arguments passed to templates.

//Explain min 5 status codes gets used in Backend development

//200 - ok
//100 - continuing
//402 - forbiden
//401 - unutherized
//400 - bad request

//What is node.js ?

//nose js is a open source javascript run-time environment.used to develop server side applications
//it is used to develop single page applications and networking application.
//features of node.js:
//event driven and asynchronous
//fast
//single threaded and highly secure
//no buffering

//Difference between HTTP and HTTPS?

//HTTP:Hyper text transfer protocol . it is set of rules and standerds to how any information cab be transfered to world wide web.
//It uses port 80 
//it is less secure thae data may be hack. it starts with http://

//HTTPS : Hyper text transfer protocol secure.used to trafer securly
//it uses port 443
//it is high secure than HTTP by encrypting the data that communicating through world wide web.

//What are JWT tokens?

//JWT: JWT stands for json web token. it is used to generate unique token. this token is used to authentication.
//it is used for security purpose.
//we showld install JWT token using npm i jsonwebtoken
