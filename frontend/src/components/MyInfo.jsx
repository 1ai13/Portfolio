import profilePic from "../assets/images/portfolio_pic.jpg";
import translations from "./Translator.jsx";

function MyInfo() {
  const { title, name, about } = translations();
  return (
    <>
      <img
        className="size-64 rounded-full border-2 border-accent-primary mask-radial-from-50% m-auto my-12 md:size-96"
        src={profilePic}
        alt="Profile Picture"
      />
      <h1 className="font-extrabold text-3xl md:text-5xl text-center mb-2">
        {title}
      </h1>
      <h2 className="font-bold text-xl md:text-3xl text-center mb-8">{name}</h2>
      <p className="font-normal mx-4 mb-16 md:mb-42 text-justify md:text-center md:w-1/2 md:mx-auto">
        {about}
      </p>
    </>
  );
}

export default MyInfo;
