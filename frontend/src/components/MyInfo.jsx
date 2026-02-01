import translations from "./Translator.jsx";
import { useState, useEffect } from "react";

function MyInfo() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isDizzy, setIsDizzy] = useState();

  useEffect(() => {
    if (isSpinning && !isDizzy) {
      const id = setTimeout(() => {
        setIsDizzy(true);
      }, 7000);
      return () => clearTimeout(id);
    }
    if (!isSpinning && isDizzy) {
      const id = setTimeout(() => {
        setIsDizzy(false);
      }, 5000);
      return () => clearTimeout(id);
    }
  }, [isSpinning, isDizzy]);

  const {
    about: {
      title,
      name,
      welcome,
      info,
      spinner: { dizzy, undizzy },
    },
  } = translations();
  return (
    <>
      <section id="info" role="main" className="mb-28 md:mb-42">
        <div className="relative my-16 w-fit mx-auto">
          <a
            href="https://github.com/1ai13"
            target="_blank"
            className={`flex mb-6 size-64 md:size-96 border-2 border-accent-primary rounded-full hover:scale-105 transition-transform duration-200 ${isSpinning ? "rotating" : ""}`}
          >
            <img
              className="rounded-full mask-radial-from-50%"
              src={`${isDizzy ? "portfolioDizzy_pic.jpg" : "portfolio_pic.jpg"}`}
              alt="Profile Picture"
            />
          </a>

          <div
            className={`md:ml-12 ${isDizzy ? "md:w-44" : "md:w-28"} md:absolute md:left-full md:top-1/2`}
          >
            <input
              onChange={handleSpinner}
              type="checkbox"
              id="spinner"
              hidden
            />
            <label
              htmlFor="spinner"
              className="flex items-center justify-center gap-1.5 cursor-pointer hover:text-gray-300 active:text-gray-300"
            >
              <svg
                width="40"
                height="20"
                viewBox="0 0 20 20"
                className={` rounded-xl transition-colors duration-300 ${isSpinning ? "bg-green-300 text-green-500" : "bg-gray-300 text-gray-400"}`}
              >
                <circle
                  cx="3"
                  cy="10"
                  r="6"
                  stroke="black"
                  fill="currentColor"
                  className={`transition-transform duration-300 ${isSpinning ? "translate-x-3.5" : ""}`}
                />
              </svg>
              {isDizzy ? dizzy : undizzy}
            </label>
          </div>
        </div>

        <h1 className="font-extrabold text-3xl md:text-5xl text-center mb-2">
          {title}
        </h1>
        <h2 className="font-bold text-xl md:text-3xl text-center mb-8">
          {name}
        </h2>
        <h3 className="font-semibold text-lg mx-4 mb-2 text-center md:w-1/2 md:mx-auto">
          {welcome}
        </h3>
        <p className="font-normal mx-4 mb-10 text-justify md:text-center md:w-1/2 md:mx-auto">
          {info}
        </p>
        <button className="block p-2 mx-auto text-white border border-blue-200 bg-accent-primary rounded cursor-pointer">
          My CV
        </button>
      </section>
    </>
  );

  function handleSpinner(event) {
    setIsSpinning(event.target.checked);
  }
}

export default MyInfo;
