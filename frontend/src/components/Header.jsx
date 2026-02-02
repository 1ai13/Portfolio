import HeaderLink from "./HeaderLink.jsx";
import Internalization from "./Internalization.jsx";
import translations from "./Translator.jsx";
import { useEffect } from "react";

function Header() {
  const { techs, projects, contactBtn } = translations();
  const navLinks = [
    { text: techs, url: "#skills" },
    { text: projects, url: "#projects" },
    { text: contactBtn, url: "#contact" },
  ];

  useEffect(() => {
    const el = document.getElementById("header");

    const id = setTimeout(() => {
      el.classList.remove("-translate-y-full");
    }, 10);
  }, []);

  return (
    <>
      <header
        id="header"
        role="navigation"
        className="header bg-bg-primary flex justify-between md:justify-start md:gap-14 shadow-md shadow-accent-primary transition-transform duration-400 -translate-y-full z-0"
      >
        <Internalization />
        {navLinks.map(({ text, url }) => (
          <HeaderLink key={text} text={text} url={url} />
        ))}
      </header>
    </>
  );
}

export default Header;
