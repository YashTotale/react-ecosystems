# React Ecosystems

A Mini Project to learn about tools in the React Ecosystem that make it easier to create large and organized React Applications.

**The following sections detail the steps it would take to recreate this template.**

## React

### Setup

- `npm init -y`
- `npm i react react-dom`
- `npm i --save-dev react-hot-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader`
- create folders: "public" and "src"
- In index.html (in public) paste
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
- In .babelrc paste 
  ```
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
  ```
- In App.js paste
  ```
  import React from "react";
  import { hot } from "react-hot-loader";
  const App = () => {
    return <div>Hello World</div>;
  };
  export default hot(module)(App);
  ```
- In index.js paste
  ```
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";
  ReactDOM.render(<App />, document.getElementById("root"));
  ```
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
- Add script `"dev": "npx webpack-dev-server --mode development"` to package.json

## Redux

### Setup

- `npm i redux react-redux redux-persist redux-thunk redux-devtools-extension @babel/runtime`
- `npm i --save-dev @babel/plugin-transform-runtime`
- Change .babelrc to
  ```
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["@babel/plugin-transform-runtime"]
  }
  ```
- In store.js paste
  ```
  import { createStore, combineReducers, applyMiddleware } from "redux";
  import { persistReducer } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
  import thunk from "redux-thunk";
  import { composeWithDevTools } from "redux-devtools-extension";

  const reducers = {};

  const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
  };

  const rootReducer = combineReducers(reducers);
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const configureStore = () =>
    createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
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
  import { persistStore } from "redux-persist";
  import { PersistGate } from "redux-persist/lib/integration/react";

  const store = configureStore();
  const persistor = persistStore(store);

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
  ```
- Add actions, reducers, thunks, selectors folders with index.js in each

## Selectors

## Styled Components

## Testing (Mocha + Chai)
