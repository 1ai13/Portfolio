import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;

const HUBS = ["App Hub", "Game Hub"];

export default function Projects() {
  const [apps, setApps] = useState([]);
  const [games, setGames] = useState([]);
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
        <h2 className="bg-bg-secondary border-b border-b-accent-primary text-2xl md:text-3xl font-bold mt-24 md:mt-36 p-6 text-center md:text-end md:pl-12">
          Projects
        </h2>
        {HUBS.map((text) => {
          return (
            <button
              key={text}
              className="inline-block bg-bg-terniary w-1/2 mx-auto text-center text-md md:text-xl p-6 hover:bg-bg-secondary active:bg-bg-secondary cursor-pointer"
            >
              {text}
            </button>
          );
        })}
        <div id="apps-container" className="flex flex-col">
          {games.map((app) => {
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
      </section>
    </>
  );
}
