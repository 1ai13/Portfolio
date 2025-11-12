import profilePic from "../assets/images/portfolio_pic.jpg";
import translations from "./Translator.jsx";
function MyInfo() {
  const { title, name, about } = translations();
  return (
    <>
      <img
        className="size-64 rounded-full mask-radial-from-50% m-auto my-5 md:size-96"
        src={profilePic}
        alt="Profile Picture"
      />
      <h1 className="font-extrabold text-3xl text-center mb-2">{title}</h1>
      <h2 className="font-bold text-xl text-center mb-8">{name}</h2>
      <p className="font-normal mx-4 text-justify md:text-center md:w-1/3 md:mx-auto">
        {about}
      </p>
    </>
  );
}

export default MyInfo;
