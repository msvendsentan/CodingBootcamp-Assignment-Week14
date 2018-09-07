# CodingBootcamp-Assignment-Week14
A simple "to-do list" full-stack (node, express, mysql, handlebars) app for Week 14 of UofT's Coding Bootcamp

**Instructions**
* If running this locally, this is a node application that requires the express, handlebars, body-parser, and mysql packages; do not forget to install after cloning!
* This is a simple "to-do app;" follow the prompts

**Specifications**
* Use node, express, handlebars, and mysql to build a "burger" app where users can enter (store), see (retrieve), and eat (update) burgers
* I tried to take this a step further and make the functionality something more accessible and intuitive--a "to-do" app

**Features**
* Server runs on node/express
* MVC structure
* Queries get passed from controller to model to ORM with mysql node package
* View rendered through handlebars, with dynamic populating of tables on page load
* GET, POST, PUT, DELETE HTTP methods and CRUD SQL functions

**Future Directions**
* Aesthetics (in code and front-end!)
* Data validation--currently users can enter in all sorts of things to the to-do list
* * Empty & very long strings, SQL injections, all sorts of foreign characters, etc
* The ability to edit tasks
* Mobile responsiveness (it's partially there, but glitchy)
