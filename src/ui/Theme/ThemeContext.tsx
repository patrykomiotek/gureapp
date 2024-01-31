"use client";

import { createContext, useContext, useState } from "react";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export type ThemeContextType = {
  customerName: string;
  // customerTheme: Theme.LIGHT;
  customerTheme: string;
  setName: (name: string) => void;
  setTheme: (name: string) => void;
};

type InitialValues = {
  name?: string;
  // theme?: Theme;
  theme?: string;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const useTheme = ({ name, theme }: InitialValues) => {
  const [customerName, setCustomerName] = useState<string>(name || "");
  const [customerTheme, setCustomerTheme] = useState<string>(theme || "light");

  const setName = (name: string) => setCustomerName(name);
  const setTheme = (theme: string) => setCustomerTheme(theme);

  return { customerName, customerTheme, setName, setTheme };
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "Oh no! Component should be placed inside ThemeContextProvider"
    );
  }
  return context;
};

export const ThemeContextProvider = ({
  children,
  initialValues,
}: {
  children: React.ReactNode;
  initialValues: InitialValues;
}) => {
  // const { customerName, customerTheme, setTheme, setName } =
  //   useTheme(initialValues);

  return (
    <ThemeContext.Provider value={useTheme(initialValues)}>
      {children}
    </ThemeContext.Provider>
  );
};
