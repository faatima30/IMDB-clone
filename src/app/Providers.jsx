"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <div className="dark:bg-gray-700 select-none dark:text-gray-200 transition-colors min-h-screen duration-300">
        {children}
        </div>

    </ThemeProvider>
  );
  {
    /* ThemeProvider cannt be used in server side component */
  }
}
