// @ts-check
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./redux/store";
import { Provider } from "react-redux"

ReactDOM.render (
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();