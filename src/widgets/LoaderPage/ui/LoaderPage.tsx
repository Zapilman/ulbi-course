import { memo } from "react";
import { Loader } from "shared/ui/Loader";
import styles from "./LoaderPage.module.scss";

const LoaderPage = () => {
  return (
    <div className={styles.loaderPage}>
      <Loader />
    </div>
  );
};

export default memo(LoaderPage);
