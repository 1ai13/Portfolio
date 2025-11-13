const techsData = {
  FrontEnd: {
    HTML: {
      icon: "html-icon.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    CSS: {
      icon: "css-icon.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    JavaScript: {
      icon: "js-icon.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    Bootstrap: {
      icon: "bootstrap-icon.png",
      url: "https://getbootstrap.com",
    },
    TailwindCSS: {
      icon: "tailwind-icon.png",
      url: "https://tailwindcss.com",
    },
    jQuery: {
      icon: "jquery-icon.png",
      url: "https://jquery.com/",
    },
    React: {
      icon: "react-icon.png",
      url: "https://reactjs.org/",
    },
    Vite: {
      icon: "vite-icon.png",
      url: "https://vite.dev",
    },
    Swing: {
      icon: "java-icon.png",
      url: "https://docs.oracle.com/javase/8/docs/technotes/guides/swing/",
    },
    Thymeleaf: {
      icon: "thymeleaf-icon.png",
      url: "https://www.thymeleaf.org/",
    },
  },
  BackEnd: {
    Java: {
      icon: "java-icon.png",
      url: "https://www.java.com/",
    },
    CSharp: {
      icon: "csharp-icon.png",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    Spring: {
      icon: "spring-icon.png",
      url: "https://spring.io/",
    },
    NodeJS: {
      icon: "node-js-icon.png",
      url: "https://nodejs.org/",
    },
    ExpressJS: {
      icon: "express-icon.png",
      url: "https://expressjs.com/",
    },
    SQL: {
      icon: "sql-icon.png",
      url: "https://en.wikipedia.org/wiki/SQL",
    },
    MySQL: {
      icon: "mysql-icon.png",
      url: "https://www.mysql.com/",
    },
    MongoDB: {
      icon: "mongodb-icon.png",
      url: "https://www.mongodb.com/",
    },
    JSON: {
      icon: "json-icon.png",
      url: "https://www.json.org/json-es.html",
    },
    XML: {
      icon: "xml-icon.png",
      url: "https://www.w3.org/XML",
    },
  },
  Tools: {
    Git: {
      icon: "git-icon.png",
      url: "https://git-scm.com/",
    },
    Godot: {
      icon: "godot-icon.png",
      url: "https://godotengine.org/",
    },
    LibGDX: {
      icon: "libgdx-icon.png",
      url: "https://libgdx.com/",
    },
    Gradle: {
      icon: "gradle-icon.png",
      url: "https://gradle.org/",
    },
    NPM: {
      icon: "npm-icon.png",
      url: "https://www.npmjs.com/",
    },
    Maven: {
      icon: "maven-icon.png",
      url: "https://maven.apache.org",
    },
    VSCode: {
      icon: "vscode-icon.png",
      url: "https://code.visualstudio.com",
    },
    IntelliJ: {
      icon: "intelliJ-icon.png",
      url: "https://www.jetbrains.com/idea/",
    },
    Eclipse: {
      icon: "eclipse-icon.png",
      url: "https://eclipseide.org",
    },
  },
};

import translations from "./Translator.jsx";

export default function SkillSection({ title, isReversed }) {
  const { skillsTools } = translations();
  const displayTitle = title == "Tools" ? skillsTools : title;

  return (
    <>
      <div
        className={`flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } group hover:bg-bg-primary border-0 border-accent-primary md:border-b`}
      >
        <div className="bg-bg-terniary p-6 w-full md:w-1/4 text-md flex items-center justify-center group-hover:bg-bg-secondary md:text-xl md:min-h-96">
          {displayTitle}
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-8 m-8 md:m-16 text-center md:w-1/2 md:gap-20 md:mx-auto">
          {Object.entries(techsData[title]).map(([k, v]) => (
            <a
              role="link"
              key={k}
              className="flex flex-col p-1 w-20 rounded-md items-center hover:bg-bg-terniary active:bg-bg-terniary"
              href={v.url}
            >
              <img className="w-10 md:w-14" src={v.icon}></img>
              {k}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
