import { BrowserRouter, Router, RouterProvider } from "react-router-dom";

import "./styles/index.scss";
import { routeConfig } from "shared/config/routes/routes.config";
import { Suspense } from "react";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={"...fallback"}>
        <RouterProvider router={routeConfig} />
      </Suspense>
    </div>
  );
};

export default App;
