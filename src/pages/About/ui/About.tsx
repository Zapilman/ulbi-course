import { memo } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return <div>{t("About")}</div>;
};

export default memo(About);
