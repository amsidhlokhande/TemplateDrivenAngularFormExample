# TemplateDrivenAngularFormExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Below is the help of Angular Created by me

SpringBoot main class is equal to app.modules.ts (AppModule class having @NgModule as annotation/decorator) in Angular( Which includes @NgModule[declarations[Component],imports[Module],providers[Services],bootstrap[Component]]
SpringBoot Controller is equal to app.component.ts (AppComponent Class having @Component annotation/decorator) in Angular(Which has selector (as endpoint) , templateUrl( represent view), styleUrls)
Spring stereotype Annotation is equal to decorator in Angular

##Each Module in Angular has four main files.
  a) app.modules.ts
  b) app.component.ts (Component has Class, Template and Metadata)
  c) app.component.html
  d) app.component.css
  e) app.component.spec.ts -> This is for unit testing purpose and can be ignored.





##They are lot of difference  between Angular JS and Angular 2+.

We are learning here Angular 2+:

## ============ANGULAR 2+ SETUP========
For setup we need to have following software on your system.

## 1) Node.js which comes along with npm(NodeJS package Manager)
Check which version of NodeJs install
  node -v
  And For npm version checking
  npm -v
## 2) Typescript- To install TypeScript use following command
     npm install -g typescript
     Check which version of typescript installed
     tsc -v
     (TypeScript compile)
     We are writting our code in typescript which will be converted 
     in js using the tsc which is understand by any web browser.

## 3) Angular CLI
   For installation of Angular CLI use following command
   npm install -g @angular/cli
   To check which version on angularJS use following command
   ng -v 
   or 
   ng v



================
## How to create angular 2+ project
Use the following commands
## 1) ng new projectName
Ask for routing ? Y
Which css ? set default

Your project will be created with lot of files.

## ==========How to run Angular 2+ Project======
Just go inside your project folder and using the following command
ng serve
your project will be compiled and deployed on default port 4200
hit page localhost:4200

## ======================Angular 2+ Project Structure and Booting Process=========================
## 1) Folder And File Structure
    a) .git
    
    b) e2e -> The file exists in this folder are used for end to end testing. Testing means for integration testing 
              and not for unit testing

    c) node_modules -> This folder contains all different modules used in this project. 
                       When you add some new module to the project that will be added in this folder. 
		       Currently it has lot of module during project creation time as well.
    d) src   -> This is the main folder where we work on. Application start booting from this folder
    e) .editorconfig -> Rules can be defined in this file for development so that every developer follow those customiszed rules.
    f) .gitignore  -> ignore file list during the git push
    g) angular.json -> This is very important file.Our application all configuration details are in this file
    h) browserlist
    i) karma.conf.js --Karma is used for testing purpose
    j) package.json  -- Project specific dependencies/devDependencies and build phases are defined in this file
    k) package-lock.json -- Shows all available/install packages in your system.
    l) README.md
    m) tsconfig.app.json
    n) tsconfig.json --Testing purpose
    o) tsconfig.spec.json
    p) tslint.json --Coding purpose rules are defined in this file.



    Spring stereotype Annotation is equal to decorator in Angular

    Following are the some known decorators 
    @NgModule -- Class Type Class level( SpringBoot main class in Spring)
    @Component -- Class Type Component Level( Controller in Spring)
    @Injectable
    @Input
    @Output
    @HostListener
    @Inject




## To create new component use following command
ng g c componentName
here g for generate
     c for component


How to create angular routing project using command line
ng new projectname --routing

How to add routing module in existing application where there were no routing module selected during creation
ng generate module app-routing --flat --module=app

How to create class in angular 
ng genereate class ClassName


0145 2422111


## How to clean npm project
Inside project directory->
npm cache clean

## ==============NG FORM ============
There are two types of angular forms 
## 1) Template Driven Form - Simple and used for small form requirement like login/registration etc
## 2) Reactive/Model Driven Form - Complex and need practise to create complex logic form.


form-control ng-untouched ng-pristine ng-valid 
form-control ng-valid ng-dirty ng-touched 
form-control ng-dirty ng-touched ng-invalid 

To install bootstrap.min.css 
npm install bootstrap

## And add the following in the angular.json inside styles key
 "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css" //  or "src/assets/css/bootstrap.min.css"
	   ]

=============================================================

## How to install express server in angular

First create one folder (express-server) and go to that folder in command prompt
on command prompt enter following command and hit enter

npm init

And now install dependencies using following command
npm install --save express body-parser cors

Following the meaning of above command:
express -- is our server
body-parser--  is middleware to handle form data 
cors- is a package to make request across different ports

create file server.json inside express-server folder and add the dependencies installed above
server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Assign a port to the express server and add a listener to listen request on that port
const PORT = 3000;
//Create instance of express server
const app = express();
//add body-parser and cors in above server instance
app.use(bodyParser.json());
app.use(cors());

//Add listener who listen all request on the server port
app.listen(PORT, function () {
  console.log("Listener has been initialized!!! " + PORT);
});


app.get('/', function (request, response) {
  response.send('Hello From Express Server');
});

//add post request
app.post('/express-server/enroll', function (request, response) {
  console.log(request.body)
  response.status(200).send({'message': 'User enrolled successfully'});
})

And finally start the server using following command

node server







