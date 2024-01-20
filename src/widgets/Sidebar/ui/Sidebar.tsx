import { memo, useState } from "react";
import styles from "./Sidebar.module.scss";
import ThemeIcon from "shared/assets/icons/dark-theme.svg";
import { ClearButton } from "shared/ui/ClearButton";
import { useTheme } from "app/providers/ThemeProvider";
import classNames from "classnames";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        styles.sidebar,
        collapsed && styles.sidebarCollapsed
      )}
    >
      <button onClick={toggleCollapsed}>{t("toggle")}</button>
      <LangSwitcher />
      <ClearButton onClick={toggleTheme}>
        <ThemeIcon width={50} height={50} />
      </ClearButton>
    </div>
  );
};

export default memo(Sidebar);
