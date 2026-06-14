import { React, ReactDOM, html } from "./lib/runtime.js";
import { App } from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(html`<${App} />`);
