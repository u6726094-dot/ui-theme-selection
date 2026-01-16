import { useSettings } from "../context/SettingsContext";

function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div className="card">
      <h2>Preview</h2>
      <p><b>Theme:</b> {theme}</p>
      <p><b>Language:</b> {language}</p>

      <p>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </p>
    </div>
  );
}

export default PreviewCard;
