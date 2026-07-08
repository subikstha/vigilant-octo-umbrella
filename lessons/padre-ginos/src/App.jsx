import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const App = () => {
  return <RouterProvider router={router} />;
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
