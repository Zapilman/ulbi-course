import { useCallback, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ETheme, LOCAL_STORAGE_THEME_KEY } from "../types/Theme.types";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
