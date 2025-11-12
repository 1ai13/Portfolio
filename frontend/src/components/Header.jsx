import Internalization from "./Internalization.jsx";
import translations from "./Translator.jsx";

function Header() {
  const { home, projects, contact } = translations();
  return (
    <>
      <header className="header bg-bg-primary flex justify-between md:justify-end md:gap-16">
        <a className="hover:bg-bg-secondary p-3 md:p-4" href="#">
          {home}
        </a>
        <a className="hover:bg-bg-secondary p-3 md:p-4" href="#">
          {projects}
        </a>
        <a className="hover:bg-bg-secondary p-3 md:p-4" href="#">
          {contact}
        </a>
        <Internalization />
      </header>
    </>
  );
}

export default Header;
