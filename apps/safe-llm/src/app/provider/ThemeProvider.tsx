"use clients"

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
/**
 * This defines the base theme for the whole application with ambient features like
 * system preferences for dark or light theme
 * system wide theme and no need of basic css theme descriptions.
 * @param param0 
 * @returns 
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
  }