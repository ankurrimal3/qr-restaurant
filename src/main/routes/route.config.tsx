import MainLayout from "layouts/main-layout";
import Menu from "layouts/Menu/Menu";
import Settings from "layouts/Settings/Settings";
import About from "modules/About";
import Home from "modules/Home";
import { RouteObject } from "react-router-dom";
import { routes } from "./route.enum";

const mainLayoutRoute: RouteObject = {
  path: routes.INDEX,
  element: <MainLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: routes.ABOUT, element: <About /> },
    { path: routes.MENU, element: <Menu /> },
    { path: routes.SETTINGS, element: <Settings /> },
  ],
};

const routeConfig: RouteObject[] = [mainLayoutRoute];

export default routeConfig;
