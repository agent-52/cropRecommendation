import App from "./src/App";
import Dashboard from "./src/Dashboard";

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default routes;
