
# Cinegular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

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


## For creating a new project

CLI commands :
`ng new <name>` to create the project with the Angular's basis files
`ng generate component <name-of-the-component>` : to create an NgModule
Create a file '<name>.model.ts' into the <name> NgModule to store the object of the NgModule 
`ng generate service <name>` to create the NgModule's service

Into the 'app.module.ts' file, import the HttpClientModule :
`import {HttpClientModule} from '@angular/common/http`;
and add it to the NgModule imports :
`@NgModule({ /**/ imports : [ HttpClienModule ] })`





