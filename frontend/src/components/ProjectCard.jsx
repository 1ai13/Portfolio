export default function ProjectCard({ title, desc, tags, logo, links }) {
  return (
    <>
      <a
        href={links.length == 1 ? links[0].url : links[1].url}
        className="border border-accent-primary m-8 rounded-lg bg-bg-terniary hover:bg-bg-secondary active:bg-bg-secondary"
      >
        <img className="bg-gray-50 rounded-lg" src={logo}></img>
        <div className="TODO">
          <p>{title}</p>
          <p>{desc}</p>
          <p>{tags}</p>
          <div className="flex justify-evenly">
            {links.map((l) => {
              return (
                <a key={l.url} href={l.url}>
                  <img className="w-12" src={l.source + "-icon.png"}></img>
                  {l.source}
                </a>
              );
            })}
          </div>
        </div>
      </a>
    </>
  );
}
