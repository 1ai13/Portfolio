import { useState } from "react";
import spainFlag from "../assets/images/spainLocale-icon.png";
import ukFlag from "../assets/images/unitedKingdomLocale-icon.png";
import { useLanguage } from "./LanguageManager.jsx";

function Localization() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang: localeLang, setLang: setLocaleLang } = useLanguage();
  const [localeFlag, setLocaleFlag] = useState(ukFlag);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative hover:bg-bg-primary p-3 md:p-4 cursor-pointer"
      >
        <div className="flex justify-center items-center gap-1 w-14">
          {localeLang}
          <img className="w-5 h-5" src={localeFlag}></img>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col border rounded-md bg-bg-primary absolute top-[85%] w-14`}
        >
          <button
            onClick={changeLocale}
            className="flex justify-center gap-1 items-center cursor-pointer rounded-md hover:bg-bg-secondary"
          >
            EN
            <img className="w-5 h-5" src={ukFlag}></img>
          </button>

          <hr />
          <button
            onClick={changeLocale}
            className="flex justify-center gap-1 items-center cursor-pointer rounded-md hover:bg-bg-secondary"
          >
            ES
            <img className="w-5 h-5" src={spainFlag}></img>
          </button>
        </div>
      </div>
    </>
  );

  function changeLocale(event) {
    const button = event.currentTarget;
    setLocaleLang(button.innerText);
    setLocaleFlag(button.querySelector("img").src);
  }
}

export default Localization;
