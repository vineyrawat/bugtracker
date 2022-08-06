import React from "react";
import ReactDOM from "react-dom/client";
import "@cloudscape-design/global-styles/index.css";
import RouterWrappper from "./route";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterWrappper />
  </React.StrictMode>
);
