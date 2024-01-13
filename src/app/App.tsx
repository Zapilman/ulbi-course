import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
const Friends = lazy(() => import("pages/Friends"));
const Home = lazy(() => import("pages/Home"));

import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/friends",
    element: (
      <Suspense>
        <Friends />
      </Suspense>
    ),
  },
]);

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="app">
      <p onClick={toggleTheme}>TOGGLE THEME</p>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
