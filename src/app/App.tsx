import { RouterProvider } from "react-router-dom";

import { routeConfig } from "shared/config/routes/routes.config";
import { Suspense } from "react";

import "./styles/index.scss";
import "shared/config/i18n/i18n.config";

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
