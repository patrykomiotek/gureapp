"use client";

import { useThemeContext } from "../Theme";

export const CustomerName = () => {
  const context = useThemeContext();

  return <span className="text-white">{context.customerName}</span>;
};
