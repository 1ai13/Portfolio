import HeaderLink from "./HeaderLink.jsx";
import Internalization from "./Internalization.jsx";
import translations from "./Translator.jsx";

function Header() {
  const { techs, projects, contact } = translations();
  const navLinks = [
    { text: techs, url: "#skills" },
    { text: projects, url: "#projects" },
    { text: contact, url: "#contact" },
  ];

  return (
    <>
      <header
        role="navigation"
        className="header bg-bg-primary flex justify-between md:justify-end md:gap-16 shadow-md shadow-accent-primary"
      >
        {navLinks.map(({ text, url }) => (
          <HeaderLink key={text} text={text} url={url} />
        ))}
        <Internalization />
      </header>
    </>
  );
}

export default Header;
