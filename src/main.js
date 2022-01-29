import App from "./App.svelte";

import "./styles/global.css";
import "./styles/fonts.css";
import "./styles/variables.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
