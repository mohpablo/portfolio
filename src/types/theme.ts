export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type Theme = "light" | "dark";
