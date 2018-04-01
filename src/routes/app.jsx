import DroneBenchPage from "views/DroneBench/DroneBench.jsx";

import {
  Dashboard
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dronebench",
    sidebarName: "DroneBench",
    navbarName: "DroneBench Deliverable Dashboard",
    icon: Dashboard,
    component: DroneBenchPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
