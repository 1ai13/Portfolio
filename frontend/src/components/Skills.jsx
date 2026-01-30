import SkillSection from "./SkillSection.jsx";
import translations from "./Translator.jsx";
import { useEffect, useState } from "react";

const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;
const TITLES = {
  front: "FrontEnd",
  back: "BackEnd",
  tools: "Tools",
};

export default function Skills() {
  const { techs, skillsClient, skillsServer, skillsTools } = translations();
  const [backendSkills, setBackendSkills] = useState([]);
  const [frontendSkills, setFrontendSkills] = useState([]);
  const [toolsSkills, setToolsSkills] = useState([]);

  const skills = [
    { title: skillsClient, isReversed: false, skills: frontendSkills },
    { title: skillsServer, isReversed: true, skills: backendSkills },
    { title: skillsTools, isReversed: false, skills: toolsSkills },
  ];

  useEffect(() => {
    async function fetchTechnologies() {
      const response = await fetch(DOMAIN_URL + "/technologies");
      if (!response.ok) throw new Error("Error fetching skills");
      const data = await response.json();
      console.log(data);

      setFrontendSkills(data.filter((p) => p.category == TITLES.front));
      setBackendSkills(data.filter((p) => p.category == TITLES.back));
      setToolsSkills(data.filter((p) => p.category == TITLES.tools));
    }

    fetchTechnologies();
  }, []);

  return (
    <>
      <section id="skills">
        <h2 className="bg-bg-secondary text-2xl md:text-3xl font-bold mt-10 p-6 text-center border-b border-b-accent-primary lg:text-start lg:pl-12">
          {techs}
        </h2>
        <div className="flex flex-col">
          {skills.map((v) => {
            return (
              <SkillSection
                key={v.title}
                title={v.title}
                isReversed={v.isReversed}
                skills={v.skills}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
