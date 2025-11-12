import htmlIcon from "../assets/images/html-icon.png";
import javaIcon from "../assets/images/java-icon.png";

export default function Skills() {
  return (
    <>
      <h2 className="bg-bg-secondary text-2xl md:text-3xl font-bold mt-10 p-4 text-center md:text-start md:pl-12">
        Skills
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="bg-bg-terniary p-4 text-center text-md md:text-lg md:p-22">
          FrontEnd
        </div>
        <div className="flex gap-3">
          <div className="hover:bg-bg-primary">
            <img className="w-10" src={htmlIcon}></img>HTML
          </div>
          <div className="hover:bg-bg-primary">
            <img className="w-10" src={htmlIcon}></img>HTML
          </div>
        </div>
      </div>
    </>
  );
}
