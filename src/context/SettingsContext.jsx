import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  // Load from localStorage on start
  useEffect(() => {
    const saved = localStorage.getItem("app-settings");
    if (saved) {
      const data = JSON.parse(saved);
      setTheme(data.theme || "light");
      setLanguage(data.language || "en");
    }
  }, []);

  // Save to localStorage whenever changed
  useEffect(() => {
    localStorage.setItem(
      "app-settings",
      JSON.stringify({ theme, language })
    );
  }, [theme, language]);

  const resetSettings = () => {
    setTheme("light");
    setLanguage("en");
    localStorage.removeItem("app-settings");
  };

  return (
    <SettingsContext.Provider
      value={{ theme, language, setTheme, setLanguage, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
