## What is NodeJS?

Node. js (Node) is an open source development platform for executing JavaScript code server-side.
Node is useful for developing applications that require a persistent connection from the browser to the server
For example : developing web application like chat,newsfeed etc

## What is V8 Engine?

It is an open-source javascript engine which compliles the javascript code to machine code before execution to use it
for server-side as well.It is written in C++ language.

## What is Event Loop in NodeJS.

Node.js is a single-threaded event-driven platform that is capable of running asynchronously programming

#### Features:

- The event loop executes tasks from the event queue only when the call stack is empty.
- The event loop allows us to use callbacks and promises.
- The event loop executes the tasks starting from the oldest first.

```JavaScript
console.log("first");

setTimeout(function(){
    console.log("second");
}, 1000);
console.log("third");
/* output
first
third
second
*/
```

## What is the use of tsconfig.json file?

The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project.
The tsconfig.json file specifies the root files and the compiler options required to compile the project.

## What are the methods provided by `fs` module to manipulate files?

We can read create update delete and rename files using fs module.

- The fs.readFile() method is used to read files on your computer.
- Create Files
- fs.appendFile()
  - The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
- fs.open()
  - The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing",
    the specified file is opened for writing. If the file does not exist, an empty file is created:
- fs.writeFile()
  - The fs.writeFile() method replaces the specified file and content if it exists.
    If the file does not exist, a new file, containing the specified content, will be created
- fs.unlink() method deletes the specified file
- fs.rename() method renames the specified file

## What is API?

An API stands for application programming interface.It is a set of defined rules that explain how
computers or applications communicate with one another. APIs sit between an application
and the web server, acting as an intermediary layer that processes data transfer between systems.

#### Here’s how an API works:

- A client application initiates an API call to retrieve information—also known as a request.
  This request is processed from an application to the web server via the API’s Uniform Resource Identifier (URI)
  and includes a headers, and sometimes, a request body.
- After receiving a valid request, the API makes a call to the external program or web server.
- The server sends a response to the API with the requested information.
- The API transfers the data to the initial requesting application

## What is JSON format?

JSON stands for JavaScript Object Notation.It a lightweight format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.The JSON format is syntactically identical
to the code for creating JavaScript objects.Because of this similarity, a JavaScript program can easily convert
JSON data into native JavaScript objects.

for example:
{
"Persom":[
{"firstName":"John", "lastName":"Doe"},
{"firstName":"Anna", "lastName":"Smith"},
{"firstName":"Peter", "lastName":"Jones"}
]
}

## Why we use JSON format for API?

JavaScript Object Notation (JSON) is the data structure part of the JavaScript programming language.
It is a perfect fit to represent JavaScript objects. JSON was a much more natural fit for developers to exchange structured data.
It did not require the rather inconvenient “data binding” and “data serialization” steps that were difficult
when using XML-based APIs.

## 9.What is a Framework?

Framework is a template or foundation for any web applications.Using frameworks saves time and
reduces the risk of errors. You don't need to write everything from the scratch, so there's less chance of errors.
Other advantages include:

- More secure code
- Simpler testing and debugging
- Clean and easily adaptable code
- Able to focus on writing code specific to the project

## How an HTTP Communication works.

When client looks something up on a internet, first domain name is mapped for IP address from DNS server ,
then, an http request is made to web browser to look up for that IP address and then the browser sends back the HTTP response
to the client's computer.That's how webpage will show on when we press enter after writing website name.

# 11.What is Middleware in ExpressJS.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function
in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes
the middleware succeeding the current middleware.

##### Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next
  middleware function. Otherwise, the request will be left unresolved.
