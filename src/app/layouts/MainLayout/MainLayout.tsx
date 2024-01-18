import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        <Sidebar />
        <div className={styles.page}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default memo(MainLayout);
