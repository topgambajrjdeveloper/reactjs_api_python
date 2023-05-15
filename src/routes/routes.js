import routesAdmin from "./admin.routes";
import routesClient from "./client.routes";
import ClientLayouts from "../Layouts/ClientLayouts/ClientLayouts";
import Error404 from "../pages/Error404/Error404";

const routes = [
  ...routesAdmin,
  ...routesClient,
  {
    path: "*",
    layout: ClientLayouts,
    component: Error404,
  },
];

export default routes;
