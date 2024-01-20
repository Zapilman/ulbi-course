import i18next from "i18next";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { t } = useTranslation();

  const toggleLang = () => {
    i18next.changeLanguage(i18next.language === "en" ? "ua" : "en");
  };

  return (
    <div>
      <button onClick={toggleLang}>toggleLang</button>
      <span>{t("Hello World")}</span>
    </div>
  );
};

export default memo(LangSwitcher);
