import SkillSection from "./SkillSection.jsx";
import translations from "./Translator.jsx";

const skills = { FrontEnd: false, BackEnd: true, Tools: false };

export default function Skills() {
  const { skillsHeader } = translations();
  return (
    <>
      <section id="skills">
        <h2 className="bg-bg-secondary text-2xl md:text-3xl font-bold mt-10 p-6 text-center border-b border-b-accent-primary md:text-start md:pl-12">
          {skillsHeader}
        </h2>
        <div className="flex flex-col">
          {Object.entries(skills).map(([k, v]) => (
            <SkillSection key={k} title={k} isReversed={v} />
          ))}
        </div>
      </section>
    </>
  );
}
