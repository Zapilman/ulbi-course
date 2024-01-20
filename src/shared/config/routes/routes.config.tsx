import { MainLayout } from "app/layouts/MainLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Friends = lazy(() => import("pages/Friends"));
const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("pages/About"));

export enum ERoutes {
  MAIN = "main",
  FRIENDS = "friends",
  ABOUT = "about",
}

export const RoutePath: Record<ERoutes, string> = {
  [ERoutes.MAIN]: "/",
  [ERoutes.FRIENDS]: "/friends",
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
        path: RoutePath.friends,
        element: <Friends />,
      },
      {
        path: RoutePath.about,
        element: <About />,
      },
    ],
  },
]);
