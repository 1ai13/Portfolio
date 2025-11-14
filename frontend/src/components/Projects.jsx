import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;

const HUBS = ["App Hub", "Game Hub"];

export default function Projects() {
  const [apps, setApps] = useState([]);
  const [games, setGames] = useState([]);
  const [hub, setHub] = useState(HUBS[0]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch(DOMAIN_URL + "/projects");

      if (!response.ok) throw new Error("Error fetch projects");

      const data = await response.json();
      console.log(data);

      setApps(data.filter((p) => p.type == "App"));
      setGames(data.filter((p) => p.type == "Game"));
    }
    fetchProjects();
  }, []);
  return (
    <>
      <section id="projects">
        <h2 className="bg-bg-secondary border-b border-b-accent-primary text-2xl md:text-3xl font-bold mt-24 lg:mt-36 p-6 text-center lg:text-end lg:pl-12">
          Projects
        </h2>
        {HUBS.map((text) => {
          return (
            <button
              onClick={() => {
                setHub(text);
              }}
              key={text}
              className={`${
                text == hub ? "underline" : ""
              }  bg-bg-terniary w-1/2 mx-auto text-center text-md md:text-lg p-6 mb-2 lg:mb-6 hover:bg-bg-secondary active:bg-bg-secondary hover:text-xl cursor-pointer`}
            >
              {text}
            </button>
          );
        })}
        <div className="relative overflow-hidden">
          {HUBS.map((v) => (
            <div
              key={v}
              className={`px-8 flex flex-col lg:flex-row flex-wrap gap-6 justify-evenly ${
                v == HUBS[0] ? "absolute" : ""
              } w-screen transition-transform duration-500 ${
                hub == v
                  ? "translate-x-0"
                  : `${v == HUBS[0] ? "-" : ""}translate-x-full`
              }`}
            >
              {(v == HUBS[0] ? apps : games).map((app) => {
                return (
                  <ProjectCard
                    key={app._id}
                    title={app.title}
                    desc={app.description}
                    tags={app.tags}
                    logo={app.logo}
                    links={app.links}
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
