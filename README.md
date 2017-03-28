# Ad Family Module

## Primary modules used (check 'em out)
* [Reactjs](https://facebook.github.io/react)
* [Reduxjs](http://redux.js.org/docs/basics/)
* [Material UI](http://www.material-ui.com/)
* [Typescript 2.x](https://www.typescriptlang.org/)
* [Webpack 2.x](https://webpack.js.org/)

## Recommended Tutorials/Prerequisites
* [Reactjs Tutorial](https://facebook.github.io/react/tutorial/tutorial.html)
* [Reduxjs](http://redux.js.org/docs/basics/)
* You will need Typscript 2.x and Webpack 2.x

### Installation

```npm install```

## Development
### Run In Development mode

```npm start```

App should be running in http://localhost:8080

When you make changes a watcher will rebuild the app and you may need to refresh the page to see the changes.

## Building

```npm run build```

## Running the build (having already run `npm run build`)

```npm run serve```

# Overview
## Data
The static data used in this app is stored in src/res/data. Images are in src/res/images. I could've stored the static data in a redux store as I've done in the past.

Some non-static data is stored using redux store. For example the assessment results.
## Containers (Container Components)
[containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.2jdt8rkz0)
Data is fed to the app and its various components from container components in the src/containers directory. 


## Components (Presentation Components)
[components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.2jdt8rkz0)
In the src/components directory are the Presentation components. The goal of these components is that they are supposed to be "dumb" and reusable.






