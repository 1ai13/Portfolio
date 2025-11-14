export default function ProjectCard({ title, desc, tags, logo, links }) {
  return (
    <>
      <button
        role="article"
        onClick={(links) => {
          window.open(links.length == 1 ? links[0].url : links[1].url);
        }}
        className="border border-accent-primary my-6 rounded-lg flex flex-col sm:flex-row lg:flex-col bg-bg-terniary hover:bg-bg-secondary active:bg-bg-secondary lg:w-1/3"
      >
        <img
          className="bg-gray-50 rounded-lg w-full max-h-120 sm:w-1/2 lg:rounded-full lg:w-80 lg:h-80 mx-auto lg:mt-6 lg:border lg:border-accent-primary"
          src={logo}
        ></img>
        <div className="p-4 my-auto sm:w-1/2 lg:w-full lg:min-h-70">
          <p className="font-bold text-xl text-center">{title}</p>
          <p className="text-center mt-4 sm:mt-8 lg:mt-4 mb-2">{desc}</p>
          <div className="flex justify-center gap-2 flex-wrap text-center text-sm mb-12">
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
                  className="flex flex-col items-center"
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
