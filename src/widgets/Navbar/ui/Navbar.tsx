import { memo } from "react";
import { AppLink } from "shared/ui/AppLink";
import styles from "./Navbar.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { RoutePath } from "shared/config/routes/routes.config";
import PaintIcon from "shared/assets/icons/dark-theme.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <AppLink to={RoutePath.main}>main</AppLink>
      <AppLink to={RoutePath.about}>about</AppLink>
    </div>
  );
};

export default memo(Navbar);
