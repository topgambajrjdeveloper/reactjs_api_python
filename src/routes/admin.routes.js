import AdminLayouts from "../Layouts/AdminLayouts/AdminLayouts";
import LoginAdmin from "../pages/Admin/LoginAdmin/LoginAdmin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayouts,
    component: LoginAdmin,
    exact: true,
  },
];
export default routesAdmin;
