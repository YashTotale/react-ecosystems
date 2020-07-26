# React Ecosystems

A Mini Project to learn about tools in the React Ecosystem that make it easier to create large and organized React Applications.

## React

### Setup

- `npm init -y`
- create folders: "public" and "src"
- create file "index.html" in public
- paste
  ```
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calendar Service</title>
  </head>
  <body>
    <div id="root"></div>
    <noscript>Please Enable JavaScript to view this site.</noscript>
    <script src="../dist/bundle.js"></script>
  </body>
  </html>
  ```
- `npm i --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`
- create `.babelrc` file and paste 
  ```
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
  ```
- `npm i react react-dom`
- In App.js paste
  ```
  import React from "react";
  const App = () => {
    return <div>Hello World</div>;
  };
  export default App;
  ```
- In index.js paste
  ```
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";
  ReactDOM.render(<App />, document.getElementById("root"));
  ```
- `npm i --save-dev webpack webpack-cli webpack-dev-server babel-loader`
- In webpack.config.js paste
  ```
  const path = require("path");
  const webpack = require("webpack");
  module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js",
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  };
  ```
- `npm i --save-dev react-hot-loader`
- Change App.js to 
  ```
  import React from "react";
  import { hot } from "react-hot-loader";
  const App = () => {
    return <div>Hello World</div>;
  };
  export default hot(module)(App);
  ```
- Add script `"dev": "npx webpack-dev-server --mode development"` to package.json

## Redux

### Setup

- `npm i redux react-redux`
- In store.js paste
  ```
  import { createStore, combineReducers } from "redux";
  const reducers = {};
  const rootReducer = combineReducers(reducers);
  export const configureStore = () => createStore(rootReducer);
  ```
- Change index.js to
  ```
  //React Imports
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";

  // Redux Imports
  import { Provider } from "react-redux";
  import { configureStore } from "./store";

  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  ```

## Redux Thunk

## Selectors

## Styled Components

## Testing (Mocha + Chai)
