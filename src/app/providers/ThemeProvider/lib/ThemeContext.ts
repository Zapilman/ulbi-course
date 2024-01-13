import { createContext } from "react";
import { ETheme } from "../types/Theme.types";

type TThemeContext = {
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
};

export const ThemeContext = createContext<TThemeContext>(null);
