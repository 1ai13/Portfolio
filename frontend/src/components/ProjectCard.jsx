export default function ProjectCard({ title, desc, tags, logo, links }) {
  return (
    <>
      <button
        role="article"
        className="border border-accent-primary my-6 rounded-lg flex flex-col sm:flex-row lg:flex-col bg-bg-terniary lg:w-1/3 hover:scale-105 transition-transform duration-150 shadow-md shadow-accent-primary"
      >
        <img
          className="bg-gray-50 rounded-lg w-full min-h-80 max-h-120 sm:w-1/2 lg:rounded-full lg:w-80 lg:h-80 mx-auto  lg:mb-6 lg:mt-6 lg:border-2 lg:border-accent-primary"
          src={logo}
        ></img>
        <hr />
        <div className="p-4 my-auto sm:w-1/2 lg:w-full lg:min-h-70">
          <p className="font-bold text-xl text-center">{title}</p>
          <p className="text-center mt-4 sm:mt-8 lg:mt-4 mb-4">{desc}</p>
          <div className="flex justify-center gap-2 flex-wrap text-center text-sm mb-10">
            {tags.map((t) => {
              return (
                <div
                  key={t}
                  className="border text-black border-accent-primary rounded-2xl min-w-12 p-1 bg-red-300"
                >
                  {t}
                </div>
              );
            })}
          </div>
          <div className="flex justify-evenly sm:justify-center sm:gap-20">
            {links.map((l) => {
              return (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  className="flex flex-col items-center rounded-3xl p-2 w-18 hover:bg-bg-secondary active:bg-bg-secondary hover:scale-110 transition-all duration-200"
                >
                  <img className="w-10" src={l.source + "-icon.png"}></img>
                  {l.source}
                </a>
              );
            })}
          </div>
        </div>
      </button>
    </>
  );
}
