import MainLayout from "layouts/main-layout";
import About from "modules/About";
import Home from "modules/Home";
import { RouteObject, Routes } from "react-router-dom";
import { AppRoutes } from "./route.enum";

const mainLayoutRoute: RouteObject = {
  path: AppRoutes.INDEX,
  element: <MainLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: AppRoutes.ABOUT, element: <About /> },
  ],
};

const routeConfig: RouteObject[] = [mainLayoutRoute];

export default routeConfig;
