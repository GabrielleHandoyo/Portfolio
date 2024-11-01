import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeManager = createContext();

export const useTheme = () => useContext(ThemeManager);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeManager.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeManager.Provider>
    );
};