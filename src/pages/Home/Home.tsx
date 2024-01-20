import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { RoutePath } from "shared/config/routes/routes.config";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <Link to={`/${RoutePath.about}`}>{t("Friends")}</Link>
    </div>
  );
};

export default Home;
