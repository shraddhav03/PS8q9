import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ForumContext, ForumProvider } from "./contexts/ForumContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { ForumContext };

root.render(
  <StrictMode>
    <Router>
      <ForumProvider>
        <App />
      </ForumProvider>
    </Router>
  </StrictMode>
);
