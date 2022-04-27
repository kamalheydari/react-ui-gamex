import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//? fonts
import "@fontsource/audiowide";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";

import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";

//? global style
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
