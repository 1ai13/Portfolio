export default function ProjectCard({ title, desc, tags, links }) {
  return (
    <>
      <div className="border m-8 p-4 rounded-xl sm:w-1/2 md:w-1/3">
        <p>{title}</p>
        <p>{desc}</p>
        <p>{tags}</p>
        <div className="flex justify-evenly">
          <a href="#">
            <img className="w-10" src="gitHub-icon.png"></img>GitHub
          </a>
          <a href="#">
            <img className="w-10" src="itchio-icon.png"></img>Itch.io
          </a>
        </div>
      </div>
    </>
  );
}
