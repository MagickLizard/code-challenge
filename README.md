# CodeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

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

## Changes I would make:

Move URL in getPeople() into config.

Add error handling in getPeople() so if something fails in the request its handled better.

Change passing string to get by gender, to be based upon routes (Makes solution more extendable).

Add a loading component.

Fix mobile responsiveness - I am not using any device specific classes at the moment available in Bulma.

Use e2e tests, I have written unit tests only (improve unit tests too).

Enjoy!
