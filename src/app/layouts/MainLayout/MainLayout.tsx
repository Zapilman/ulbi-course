import { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import styles from "./MainLayout.module.scss";
import { LoaderPage } from "widgets/LoaderPage";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        <Sidebar />
        <div className={styles.page}>
          <Suspense fallback={<LoaderPage />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default memo(MainLayout);
