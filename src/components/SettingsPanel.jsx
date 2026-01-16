import { useSettings } from "../context/SettingsContext";

function SettingsPanel() {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <div className="card">
      <h2>Settings</h2>

      <div className="row">
        <p>Theme:</p>
        <button onClick={() => setTheme("light")} disabled={theme === "light"}>Light</button>
        <button onClick={() => setTheme("dark")} disabled={theme === "dark"}>Dark</button>
      </div>

      <div className="row">
        <p>Language:</p>
        <button onClick={() => setLanguage("en")} disabled={language === "en"}>EN</button>
        <button onClick={() => setLanguage("th")} disabled={language === "th"}>TH</button>
      </div>

      <button className="reset" onClick={resetSettings}>Reset</button>
    </div>
  );
}

export default SettingsPanel;
