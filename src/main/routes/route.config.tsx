import MainLayout from "layouts/main-layout";
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
  ],
};

const routeConfig: RouteObject[] = [mainLayoutRoute];

export default routeConfig;
