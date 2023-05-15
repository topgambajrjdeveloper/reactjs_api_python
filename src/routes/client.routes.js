import ClientLayouts from "../Layouts/ClientLayouts/ClientLayouts";
import Home from "../pages/Client/Home/Home";
import Teams from "../pages/Client/Teams/Teams";
import Categoria from '../pages/Client/Categoria/Categoria'
import Publicacion from '../pages/Client/Publicacion/Publicacion'
import Contacto from '../pages/Client/Contacto/Contacto'
import Perfil from "../pages/Client/Perfil/Perfil";
import Search from "../pages/Client/Search/Search";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Activate from "../components/auth/Activate";

const routesClient = [
  {
    path: "/",
    layout: ClientLayouts,
    component: Home,
    exact: true,
  },
  {
    path: "/publicacion/",
    layout: ClientLayouts,
    component: Publicacion,
    exact: false,
  },
  {
    path: "/teams",
    layout: ClientLayouts,
    component: Teams,
    exact: true,
  },
  {
    path: "/categoria/:slug",
    layout: ClientLayouts,
    component: Categoria,
    exact: false,
  },
  {
    // path: "/?s=:term",
    path: "/search/:term",
    layout: ClientLayouts,
    component: Search,
    exact: false,
  },
  {
    path: "/contacto",
    layout: ClientLayouts,
    component: Contacto,
    exact: true,
  },
  {
    path: "/perfil",
    layout: ClientLayouts,
    component: Perfil,
    exact: true,
  },
  {
    path: "/auth/acceder",
    layout: ClientLayouts,
    component: Login,
    exact: true,
  },
  {
    path: "/auth/registrate",
    layout: ClientLayouts,
    component: Register,
    exact: true,
  },
  {
    path: "/activate/:uid/:token",
    layout: ClientLayouts,
    component: Activate,
    exact: true,
  },
];
export default routesClient;
