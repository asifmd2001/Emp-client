import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";
import reducers from "./reducers";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_LEFT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};

function Root () {  
  return(

    <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
    )
};

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  {<Root />}
  </Provider>,
  document.getElementById("root")
);
