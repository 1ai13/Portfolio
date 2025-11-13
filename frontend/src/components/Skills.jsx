import SkillSection from "./SkillSection.jsx";
import translations from "./Translator.jsx";

export default function Skills() {
  const { skillsHeader } = translations();
  return (
    <>
      <h2 className="bg-bg-secondary text-2xl md:text-3xl font-bold mt-10 p-6 text-center border-b border-b-accent-primary md:text-start md:pl-12">
        {skillsHeader}
      </h2>
      <div className="flex flex-col">
        <SkillSection title={"FrontEnd"} isReversed={false} />
        <SkillSection title={"BackEnd"} isReversed={true} />
        <SkillSection title={"Tools"} isReversed={false} />
      </div>
    </>
  );
}
