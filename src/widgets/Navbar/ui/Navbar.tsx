import { memo } from "react";
import { AppLink } from "shared/ui/AppLink";
import styles from "./Navbar.module.scss";
import { RoutePath } from "shared/config/routes/routes.config";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.navbar}>
      <AppLink to={RoutePath.main}>{t("main")}</AppLink>
      <AppLink to={RoutePath.about}>{t("about")}</AppLink>
    </div>
  );
};

export default memo(Navbar);
