import { useTranslation } from "react-i18next";

const Friends = () => {
  const { t } = useTranslation();
  if (__IS_MOBILE__) {
    return "mobile";
  }

  const keke = (asda: string) => {
    return <div>{asda}</div>;
  };

  return (
    <div>
      {t("Friendasdasdasdasd")}
      {keke("213")}
      {/* <Button>adsasdasdasd</Button> */}
    </div>
  );
};

export default Friends;
