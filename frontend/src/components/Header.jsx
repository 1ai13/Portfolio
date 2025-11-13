import Internalization from "./Internalization.jsx";
import translations from "./Translator.jsx";

function Header() {
  const { home, projects, contact } = translations();
  return (
    <>
      <header className="header bg-bg-primary flex justify-between md:justify-end md:gap-16 shadow-md shadow-accent-primary">
        <a
          className="hover:bg-bg-secondary p-3 md:p-4 active:bg-bg-secondary"
          href="#"
        >
          {home}
        </a>
        <a
          className="hover:bg-bg-secondary p-3 md:p-4 active:bg-bg-secondary"
          href="#"
        >
          {projects}
        </a>
        <a
          className="hover:bg-bg-secondary p-3 md:p-4 active:bg-bg-secondary"
          href="#"
        >
          {contact}
        </a>
        <Internalization />
      </header>
    </>
  );
}

export default Header;
