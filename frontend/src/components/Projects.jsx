import { useEffect, useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { useLanguage } from "./LanguageManager";
import translations from "./Translator.jsx";
const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;
const HUBS = ["App Hub", "Game Hub"];

export default function Projects() {
  const { lang } = useLanguage();
  const { projects } = translations();
  const [apps, setApps] = useState([]);
  const [games, setGames] = useState([]);
  const [hub, setHub] = useState(HUBS[0]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch(DOMAIN_URL + "/projects");

      if (!response.ok) throw new Error("Error fetching projects");

      const data = await response.json();

      setApps(data.filter((p) => p.type == "App"));
      setGames(data.filter((p) => p.type == "Game"));
    }
    fetchProjects();
  }, []);
  return (
    <>
      <section id="projects">
        <h2 className="bg-bg-secondary border-b border-b-accent-primary text-2xl md:text-3xl font-bold mt-24 lg:mt-36 p-6 text-center lg:text-end lg:pr-10">
          {projects}
        </h2>
        {HUBS.map((text) => {
          return (
            <button
              aria-label={"Change HUB to " + text}
              onClick={() => {
                setHub(text);
              }}
              key={text}
              className={`${
                text == hub ? "underline font-bold" : ""
              }  bg-bg-terniary ${text == HUBS[0] ? "border-r-2" : ""} border-accent-primary w-1/2 mx-auto text-center transition-all duration-300 text-md md:text-lg p-6 mb-2 lg:mb-6 hover:bg-bg-secondary active:bg-bg-secondary cursor-pointer`}
            >
              {text}
            </button>
          );
        })}
        <div className="relative overflow-hidden">
          {HUBS.map((v) => (
            <div
              key={v}
              className={`px-8 flex flex-col lg:flex-row flex-wrap gap-6 justify-evenly w-screen transition-transform duration-150  ${hub == v ? "relative" : "absolute"}  
              ${
                hub == v
                  ? `translate-x-0`
                  : `${v == HUBS[0] ? "-translate-x-full" : "translate-x-full"}`
              }`}
            >
              {(v == HUBS[0] ? apps : games).map((project) => {
                let description =
                  lang == "EN"
                    ? project.description_en
                    : project.description_es;
                return (
                  <ProjectCard
                    key={project._id}
                    title={project.title}
                    desc={description}
                    tags={project.tags}
                    logo={project.logo}
                    links={project.links}
                  ></ProjectCard>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
