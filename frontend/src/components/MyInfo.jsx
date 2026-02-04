import { useLanguage } from "./LanguageManager.jsx";
import translations from "./Translator.jsx";
import { useState, useEffect, useRef } from "react";

const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;
var targetFollowers = 0;
var targetFollowings = 0;
const animationConfig = [
  {
    id: "pic",
    toRemove: "-translate-y-[100vh]",
  },
  {
    id: "title",
    toRemove: "-translate-x-[100vw]",
  },
  {
    id: "name",
    toRemove: "translate-x-[100vw]",
  },
  {
    id: "welcome",
    toRemove: "translate-x-[100vw]",
  },
  {
    id: "infoText",
    toRemove: "-translate-x-[100vw]",
  },
  {
    id: "CV",
    toRemove: "translate-y-[250px]",
  },
  {
    id: "followers",
    toRemove: "-translate-x-[100vw]",
  },
  {
    id: "followings",
    toRemove: "translate-x-[100vw]",
  },
  {
    id: "toggleSpin",
    toRemove: "opacity-0",
  },
  // {
  //   id: "gitIcon",
  //   toRemove: "opacity-0",
  // },
];
function MyInfo() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isDizzy, setIsDizzy] = useState();
  const modal = useRef(null);
  const { lang } = useLanguage();
  const [followers, setFollowers] = useState(0);
  const [followings, setFollowings] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) return;

    const timer = setTimeout(() => {
      animationConfig.forEach((config) => {
        const el = document.getElementById(config.id);
        config.toRemove && el?.classList.add(config.toRemove);
        config.toRemove && el?.classList.remove(config.toRemove);
      });
    }, 10); // Small delay to ensure DOM is painted

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (
      followers == targetFollowers &&
      followings == targetFollowings &&
      targetFollowers != 0
    )
      return;
    const id = setInterval(() => {
      if (followers < targetFollowers) {
        setFollowers(followers + 1);
      }
      if (followings < targetFollowings) {
        setFollowings(followings + 1);
      }
    }, 50);
    return () => clearInterval(id);
  }, [followers, followings]);

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
      btnCV: { text, modalInfo, success, fail },
      followersTrans,
      followingsTrans,
    },
  } = translations();

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoaded(true);
      getGitData();
    }, 2650);

    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <section id="info" role="main" className="mb-28 md:mb-36 overflow-hidden">
        <div
          id="pic"
          className="relative my-16 w-fit mx-auto transition-transform duration-500 delay-500 -translate-y-[100vh]"
        >
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
            id="toggleSpin"
            className={`md:ml-12 ${isDizzy ? "md:w-44" : "md:w-28"} md:absolute md:left-full md:top-1/2 transition-opacity ${isLoaded ? "pointer-events-auto" : "opacity-0 pointer-events-none"} duration-300 `}
            style={{ transitionDelay: "3.3s" }}
          >
            <input
              onChange={handleSpinner}
              type="checkbox"
              id="spinner"
              hidden
            />
            <label
              htmlFor="spinner"
              className="flex items-center w-fit mx-auto justify-center gap-1.5 cursor-pointer hover:text-gray-300 active:text-gray-300"
            >
              <svg
                width="40"
                height="20"
                viewBox="0 0 20 20"
                className={`shadow-sm shadow-accent-primary rounded-xl transition-colors duration-300 ${isSpinning ? "bg-green-300 text-green-500" : "bg-gray-300 text-gray-400"}`}
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

        <h1
          id="title"
          className="font-extrabold mx-6 text-3xl md:text-5xl text-center mb-2 transition-transform duration-500 -translate-x-[100vw]"
          style={{ transitionDelay: "0.80s" }}
        >
          {title}
        </h1>
        <h2
          id="name"
          className="font-bold text-xl md:text-3xl text-center mb-8 transition-transform duration-500 translate-x-[100vw] delay-1000"
        >
          {name}
        </h2>
        <h3
          id="welcome"
          className="font-semibold text-lg mx-4 mb-2 text-center md:w-1/2 md:mx-auto transition-transform duration-500 translate-x-[100vw]"
          style={{ transitionDelay: "1.5s" }}
        >
          {welcome}
        </h3>
        <p
          id="infoText"
          className="font-normal mx-6 md:mx-auto mb-10 text-justify md:text-center md:w-1/2 transition-transform duration-500 -translate-x-[100vw]"
          style={{ transitionDelay: "1.7s" }}
        >
          {info}
        </p>
        <button
          id="CV"
          onClick={handleCV}
          className="block p-2 mb-10 mx-auto text-white border border-red-600 shadow-sm shadow-accent-primary bg-red-500 rounded cursor-pointer active:bg-red-400 hover:bg-red-600
          transition-transform duration-500 translate-y-[250px]"
          style={{ transitionDelay: "2.2s" }}
        >
          {text}
        </button>
        <div className="flex justify-center items-center gap-10 text-center text-black m-2">
          <div
            id="followers"
            className="w-24 h-fit bg-gray-300 border border-accent-primary shadow shadow-accent-secondary rounded-md transition-transform duration-500 -translate-x-[100vw]"
            style={{ transitionDelay: "2.5s" }}
          >
            <div className="flex flex-col">
              <span className="text-2xl">0{followers}</span>
              <span>{followersTrans}</span>
            </div>
          </div>
          <a
            id="gitIcon"
            href="https://github.com/1ai13"
            target="_blank"
            className={`transition-all duration-500 opacity-0 ${isLoaded ? "opacity-100 pointer-events-auto" : "pointer-events-none"} flex items-center w-14 h-14 rounded-full border border-accent-secondary shadow shadow-accent-secondary`}
          >
            <img
              src="gitwhite-icon.png"
              className="size-14 object-cover rounded-full"
            ></img>
          </a>

          <div
            id="followings"
            className="w-24 h-fit bg-gray-300 border border-accent-primary shadow shadow-accent-secondary rounded-md transition-transform duration-500 translate-x-[100vw]"
            style={{ transitionDelay: "2.5s" }}
          >
            <div className="flex flex-col">
              <span className="text-2xl">0{followings}</span>
              <span>{followingsTrans}</span>
            </div>
          </div>
        </div>

        <dialog
          id="modalCV"
          className="fixed bg-bg-terniary text-white p-6 pb-4 mt-40 mx-8 sm:mx-auto sm:w-1/2 lg:w-1/3 xl:w-1/4 text-justify"
          closedby="any"
          ref={modal}
        >
          <button
            onClick={handleCVResponse}
            name="cross"
            value="close"
            className="absolute text-black top-1 left-1 active:text-red-500 hover:text-red-500 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="mt-2">
            {modalInfo}
            <div className="flex justify-center gap-12 mt-4">
              <a
                name="Yes"
                value="download"
                onClick={handleCVResponse}
                href={"/cvs/unai-gonz-san-" + lang + "_CV.pdf"}
                download={"unai-gonz-san-" + lang + "_CV"}
                className="bg-green-400 border-2 border-green-700 rounded text-black p-1 px-2 active:bg-green-500 hover:bg-green-600"
              >
                {success}
              </a>
              <button
                name="no"
                value="close"
                onClick={handleCVResponse}
                className="bg-red-400 border-2 border-red-700 rounded text-black p-1 px-2 active:bg-red-500  hover:bg-red-600 cursor-pointer"
              >
                {fail}
              </button>
            </div>
          </div>
        </dialog>
      </section>
    </>
  );

  function handleSpinner(event) {
    setIsSpinning(event.target.checked);
  }

  function handleCV(event) {
    modal.current.showModal();
  }

  function handleCVResponse(event) {
    modal.current.close();
  }

  async function getGitData() {
    try {
      const res = await fetch(DOMAIN_URL + "/git-data");
      if (!res.ok) console.error("Error getting git data");

      if (res.ok) {
        const data = await res.json();
        targetFollowers = data.followers.length;
        targetFollowings = data.following.length;
      } else {
        setFollowers(0);
        setFollowings(0);
      }
    } catch (error) {
      setFollowers(0);
      setFollowings(0);
      console.error("Error getting git data " + error);
    }
  }
}

export default MyInfo;
