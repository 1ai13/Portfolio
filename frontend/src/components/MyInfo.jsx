import translations from "./Translator.jsx";

function MyInfo() {
  const {
    about: { title, name, welcome, info },
  } = translations();
  return (
    <>
      <section id="info" role="main">
        <img
          className="size-64 rounded-full border-2 border-accent-primary mask-radial-from-50% m-auto my-16 md:size-96"
          src="portfolio_pic.jpg"
          alt="Profile Picture"
        />
        <h1 className="font-extrabold text-3xl md:text-5xl text-center mb-2">
          {title}
        </h1>
        <h2 className="font-bold text-xl md:text-3xl text-center mb-8">
          {name}
        </h2>
        <h3 className="font-semibold text-lg mx-4 mb-2 text-center md:w-1/2 md:mx-auto">
          {welcome}
        </h3>
        <p className="font-normal mx-4 mb-28 md:mb-42 text-justify md:text-center md:w-1/2 md:mx-auto">
          {info}
        </p>
      </section>
    </>
  );
}

export default MyInfo;
