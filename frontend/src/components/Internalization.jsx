import { useState } from "react";
import { useLanguage } from "./LanguageManager.jsx";
import spainFlag from "../assets/images/spainLocale-icon.png";
import ukFlag from "../assets/images/unitedKingdomLocale-icon.png";

const FLAGS = { EN: ukFlag, ES: spainFlag };

function Localization() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang: localeLang, setLang: setLocaleLang } = useLanguage();
  const [localeFlag, setLocaleFlag] = useState(FLAGS.EN);

  return (
    <>
      <div
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="relative hover:bg-bg-primary p-3 md:p-4 cursor-pointer"
      >
        <div className="flex justify-center items-center gap-1 w-14">
          {localeLang}
          <img className="w-5 h-5" src={localeFlag}></img>
        </div>

        <div
          role="menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col border rounded-md bg-bg-primary absolute top-[85%] w-14`}
        >
          {Object.keys(FLAGS).map((lang) => {
            return (
              <button
                key={lang}
                role="menuitem"
                onClick={() => changeLocale(lang)}
                className="flex justify-center gap-1 items-center cursor-pointer rounded-md hover:bg-bg-secondary"
              >
                {lang}
                <img className="w-5 h-5" src={FLAGS[lang]} alt={lang}></img>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );

  function changeLocale(lang) {
    setLocaleLang(lang);
    setLocaleFlag(FLAGS[lang]);
  }
}

export default Localization;
