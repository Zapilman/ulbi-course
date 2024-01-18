import { MainLayout } from "app/layouts/MainLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Friends = lazy(() => import("pages/Friends"));
const Home = lazy(() => import("pages/Home"));

export enum ERoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<ERoutes, string> = {
  [ERoutes.MAIN]: "/",
  [ERoutes.ABOUT]: "/about",
};

export const routeConfig = createBrowserRouter([
  {
    path: RoutePath.main,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RoutePath.about,
        element: <Friends />,
      },
    ],
  },
]);
