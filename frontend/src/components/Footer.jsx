import translations from "./Translator.jsx";

function Footer() {
  const {
    footer: { copy, locationTrans, statusTrans },
    form: { subject },
  } = translations();
  const contactInfo = {
    links: [
      {
        icon: "linkdn-icon.png",
        url: "https://www.linkedin.com/in/unai-gonzález-sánchez/",
        text: "LinkedIn",
      },
      {
        icon: "github-icon.png",
        url: "https://github.com/1ai13",
        text: "GitHub",
      },
      {
        icon: "itch.io-icon.png",
        url: "https://1ai-13.itch.io",
        text: "Itch.io",
      },
    ],
    addresses: {
      location: {
        icon: "location-icon.png",
        text: "Asturias, " + locationTrans,
      },
      email: {
        icon: "email-icon.png",
        text: "unaigsanchez@gmail.com",
      },
      timezone: {
        icon: "timezone-icon.png",
        text: "CET (UTC+1 / UTC+2)",
      },
      status: {
        icon: "status-icon.png",
        text: statusTrans,
      },
    },
  };
  const { location, email, timezone, status } = contactInfo.addresses;

  return (
    <>
      <footer className="bg-bg-secondary border-t border-accent-primary flex flex-col text-center gap-1 md:flex-row justify-center md:justify-around md:items-center">
        <div className="flex justify-evenly p-4 md:gap-8 lg:gap-10 xl:gap-14">
          {contactInfo.links.map((l) => {
            return (
              <a
                key={l.text}
                href={l.url}
                target="_blank"
                className="flex flex-col w-16 items-center p-1 rounded-lg hover:bg-bg-terniary active:bg-bg-terniary hover:scale-110 transition-all duration-200"
              >
                <img alt={l.text + " icon"} src={l.icon} className="w-10"></img>
                {l.text}
              </a>
            );
          })}
        </div>

        <div className="p-4">
          © 2026 <span className="font-semibold">UGS</span>. {copy}
        </div>

        <div className="flex flex-col md:items-start p-4 gap-1.5">
          <div className="flex justify-center items-center gap-0.5">
            <img
              alt={location.text + " icon"}
              src={location.icon}
              className="w-5"
            ></img>
            <a
              href="https://www.google.com/maps/place/Principado+de+Asturias,+Asturias"
              target="_blank"
              className="hover:text-accent-secondary active:text-accent-primary"
            >
              {location.text}
            </a>
          </div>
          <div className="flex justify-center items-center gap-0.5">
            <img
              alt={email.text + " icon"}
              src={email.icon}
              className="w-5"
            ></img>
            <a
              href={"mailto:unaigsanchez@gmail.com?subject=" + subject}
              className="hover:text-accent-secondary active:text-accent-primary"
            >
              {email.text}
            </a>
          </div>
          <div className="flex justify-center items-center gap-0.5">
            <img
              alt={timezone.text + " icon"}
              src={timezone.icon}
              className="w-5"
            ></img>
            {timezone.text}
          </div>
          <div className="flex justify-center items-center gap-0.5">
            <img
              alt={status.text + " icon"}
              src={status.icon}
              className="w-5"
            ></img>
            {status.text}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
