import translations from "./Translator.jsx";

export default function SkillSection({ title, isReversed, skills }) {
  return (
    <>
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } group hover:bg-bg-primary border-0 border-accent-primary lg:border-b`}
      >
        <div className="bg-bg-terniary p-6 w-full lg:w-1/4 text-lg flex items-center justify-center group-hover:bg-bg-secondary lg:text-xl lg:min-h-96 group-hover:text-2xl transition-all duration-200">
          {title}
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-8 m-8 lg:m-16 text-center lg:w-1/2 lg:gap-20 lg:mx-auto">
          {skills.map((s) => (
            <a
              role="link"
              key={s._id}
              target="_blank"
              className="flex flex-col p-1 w-20 rounded-md items-center hover:bg-bg-terniary active:bg-bg-terniary hover:scale-110 transition-all duration-200"
              href={s.url}
            >
              <img className="w-10 lg:w-14" src={s.icon}></img>
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
