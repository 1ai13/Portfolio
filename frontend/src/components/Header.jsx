import Localization from "./Localization.jsx";

function Header() {
  return (
    <>
      <header className="header bg-bg-primary  p-4 flex justify-between md:justify-end md:gap-16">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <Localization />
      </header>
    </>
  );
}

export default Header;
