import React from "react";
import { useRoutes } from "react-router-dom";
import routeConfig from "./route.config";

const MainRouter = () => {
  const routes = useRoutes(routeConfig);
  return <>{routes}</>;
};

export default MainRouter;
