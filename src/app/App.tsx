import { RouterProvider } from "react-router-dom";

import { routeConfig } from "shared/config/routes/routes.config";
import { Suspense } from "react";

import "./styles/index.scss";
import "shared/config/i18n/i18n.config";
import { LoaderPage } from "widgets/LoaderPage";

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<LoaderPage />}>
        <RouterProvider router={routeConfig} />
      </Suspense>
    </div>
  );
};

export default App;
