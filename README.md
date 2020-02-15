# Angular Predictive Prefetching

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Angular predictive prefetching with guess.js

### guess-ga
fetches structured data from Google Analytics
https://github.com/guess-js/guess/tree/master/packages/guess-ga
### guess-webpack
webpack plugin which automates the process of applying data-driven bundling & pre-fetching in React & Angular applications
https://github.com/guess-js/guess/tree/master/packages/guess-webpack
### guess-parser
parses an application in order to create the mapping between routes and JavaScript bundles
https://github.com/guess-js/guess/tree/master/packages/guess-parser

### run

1. `npm i` to install all our project's dependencies.
2. `npm i -g serve`
3. In your package.json, add the following scripts
   
   ```JSON
   "scripts": {
     "start": "ng serve",
     "build": "ng build",
     "build:optimized": "ng build --prod"
   }
   ```
4. `npm start` your client
5. `build:optimized` build your client with aot and optimized flag or `build` without optimizations
6. cd dist/angular-predictive-prefetching
6. run `serve -s`
7. In your browser - go to http://localhost:5000/


