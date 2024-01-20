import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { ETheme, LOCAL_STORAGE_THEME_KEY } from "../types/Theme.types";
import { ThemeContext } from "../lib/ThemeContext";
import { Helmet } from "react-helmet";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.DARK
  );
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setThemeLoaded(false);
    /* webpackMode: "lazy-once" */
    import(`app/styles/themes/${theme}.scss`).then(() => {
      setThemeLoaded(true);
    });
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <>
      <Helmet>
        <html data-theme={theme} />
        <title>My Title</title>
      </Helmet>
      <ThemeContext.Provider value={defaultProps}>
        {themeLoaded ? children : <button>loading</button>}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
