import { useState } from "react";
import spainFlag from "../assets/images/spainLocale-icon.png";
import ukFlag from "../assets/images/unitedKingdomLocale-icon.png";

function Localization() {
  const [isOpen, setIsOpen] = useState(false);
  const [localeLang, setLocaleLang] = useState("EN");
  const [localeFlag, setLocaleFlag] = useState(ukFlag);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-center items-center gap-1 cursor-pointer w-14"
        >
          {localeLang}
          <img className="w-5 h-5" src={localeFlag}></img>
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col border rounded-md bg-bg-secondary mt-1 absolute top-full w-14 shadow-xl shadow-bg-secondary`}
        >
          <button
            onClick={changeLocale}
            className="flex justify-center gap-1 items-center cursor-pointer"
          >
            EN
            <img className="w-5 h-5" src={ukFlag}></img>
          </button>

          <hr />
          <button
            onClick={changeLocale}
            className="flex justify-center gap-1 items-center cursor-pointer"
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
