import React from "react";
import ReactDOM from "react-dom/client";
import "tippy.js/dist/tippy.css";
import { GlobalStyles } from "./style";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);