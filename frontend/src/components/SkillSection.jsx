import translations from "./Translator.jsx";

export default function SkillSection({ title, isReversed, skills }) {
  const { skillsTools } = translations();
  const displayTitle = title == "Tools" ? skillsTools : title;

  return (
    <>
      <div
        className={`flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } group hover:bg-bg-primary border-0 border-accent-primary md:border-b`}
      >
        <div className="bg-bg-terniary p-6 w-full md:w-1/4 text-md flex items-center justify-center group-hover:bg-bg-secondary md:text-xl md:min-h-96">
          {displayTitle}
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-8 m-8 md:m-16 text-center md:w-1/2 md:gap-20 md:mx-auto">
          {skills.map((s) => (
            <a
              role="link"
              key={s._id}
              className="flex flex-col p-1 w-20 rounded-md items-center hover:bg-bg-terniary active:bg-bg-terniary"
              href={s.url}
            >
              <img className="w-10 md:w-14" src={s.icon}></img>
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
