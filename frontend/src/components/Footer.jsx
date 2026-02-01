function Footer() {
  const contactInfo = {
    links: [
      {
        icon: "linkdn-icon.png",
        url: "https://www.linkedin.com/in/unai-gonzález-sánchez/",
        text: "LinkedIn",
      },
      {
        icon: "GitHub-icon.png",
        url: "https://github.com/1ai13",
        text: "GitHub",
      },
      {
        icon: "Itch.io-icon.png",
        url: "https://1ai-13.itch.io",
        text: "Itch.io",
      },
    ],
    address: [
      {
        icon: "location-icon.png",
        text: "Asturias, Spain",
      },
      {
        icon: "email-icon.png",
        text: "unaigsanchez@gmail.com",
      },
      {
        icon: "timezone-icon.png",
        text: "CET (UTC+1 / UTC+2)",
      },
      {
        icon: "status-icon.png",
        text: "Part-time (flexible hours)",
      },
    ],
  };

  return (
    <>
      <footer className="bg-bg-primary border-t border-accent-primary flex flex-col text-center gap-1 md:flex-row justify-center md:justify-around md:items-center">
        <div className="flex justify-evenly p-4 md:gap-9 lg:gap-12 xl:gap-14">
          {contactInfo.links.map((l) => {
            return (
              <a
                href={l.url}
                target="_blank"
                className="flex flex-col items-center"
              >
                <img src={l.icon} className="w-10"></img>
                {l.text}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col p-4 gap-1.5">
          {contactInfo.address.map((l) => {
            return (
              <div className="flex justify-center items-center gap-0.5">
                <img src={l.icon} className="w-5"></img>
                {l.text}
              </div>
            );
          })}
        </div>
        <div className="p-4">© 2026 1ai. All rights reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
