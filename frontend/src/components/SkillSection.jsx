//Frontend Icons
import htmlIcon from "../assets/images/html-icon.png";
import javaIcon from "../assets/images/java-icon.png";
import cssIcon from "../assets/images/css-icon.png";
import jsIcon from "../assets/images/js-icon.png";
import jQueryIcon from "../assets/images/jquery-icon.png";
import reactIcon from "../assets/images/react-icon.png";
import thymeleafIcon from "../assets/images/thymeleaf-icon.png";
import bootstrapIcon from "../assets/images/bootstrap-icon.png";
import tailwindIcon from "../assets/images/tailwind-icon.png";
import viteIcon from "../assets/images/vite-icon.png";

//Backend Icons
import csharpIcon from "../assets/images/csharp-icon.png";
import springIcon from "../assets/images/spring-icon.png";
import sqlIcon from "../assets/images/sql-icon.png";
import mysqlIcon from "../assets/images/mysql-icon.png";
import nodeIcon from "../assets/images/node-js-icon.png";
import mongodbIcon from "../assets/images/mongodb-icon.png";
import expressIcon from "../assets/images/express-icon.png";
import jsonIcon from "../assets/images/json-icon.png";
import xmlIcon from "../assets/images/xml-icon.png";

//Tools Icons
import gitIcon from "../assets/images/git-icon.png";
import godotIcon from "../assets/images/godot-icon.png";
import libGdxIcon from "../assets/images/libgdx-icon.png";
import gradleIcon from "../assets/images/gradle-icon.png";
import npmIcon from "../assets/images/npm-icon.png";
import mavenIcon from "../assets/images/maven-icon.png";
import eclipseIcon from "../assets/images/eclipse-icon.png";
import vscodeIcon from "../assets/images/vscode-icon.png";
import intelliJIcon from "../assets/images/intelliJ-icon.png";

const techsData = {
  FrontEnd: {
    HTML: {
      icon: htmlIcon,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    CSS: {
      icon: cssIcon,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    JavaScript: {
      icon: jsIcon,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    Bootstrap: {
      icon: bootstrapIcon,
      url: "https://getbootstrap.com",
    },
    TailwindCSS: {
      icon: tailwindIcon,
      url: "https://tailwindcss.com",
    },
    jQuery: {
      icon: jQueryIcon,
      url: "https://jquery.com/",
    },
    React: {
      icon: reactIcon,
      url: "https://reactjs.org/",
    },
    Vite: {
      icon: viteIcon,
      url: "https://vite.dev",
    },
    Swing: {
      icon: javaIcon,
      url: "https://docs.oracle.com/javase/8/docs/technotes/guides/swing/",
    },
    Thymeleaf: {
      icon: thymeleafIcon,
      url: "https://www.thymeleaf.org/",
    },
  },
  BackEnd: {
    Java: {
      icon: javaIcon,
      url: "https://www.java.com/",
    },
    CSharp: {
      icon: csharpIcon,
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    Spring: {
      icon: springIcon,
      url: "https://spring.io/",
    },
    NodeJS: {
      icon: nodeIcon,
      url: "https://nodejs.org/",
    },
    ExpressJS: {
      icon: expressIcon,
      url: "https://expressjs.com/",
    },
    SQL: {
      icon: sqlIcon,
      url: "https://en.wikipedia.org/wiki/SQL",
    },
    MySQL: {
      icon: mysqlIcon,
      url: "https://www.mysql.com/",
    },
    MongoDB: {
      icon: mongodbIcon,
      url: "https://www.mongodb.com/",
    },
    JSON: {
      icon: jsonIcon,
      url: "https://www.json.org/json-es.html",
    },
    XML: {
      icon: xmlIcon,
      url: "https://www.w3.org/XML",
    },
  },
  Tools: {
    Git: {
      icon: gitIcon,
      url: "https://git-scm.com/",
    },
    Godot: {
      icon: godotIcon,
      url: "https://godotengine.org/",
    },
    LibGDX: {
      icon: libGdxIcon,
      url: "https://libgdx.com/",
    },
    Gradle: {
      icon: gradleIcon,
      url: "https://gradle.org/",
    },
    NPM: {
      icon: npmIcon,
      url: "https://www.npmjs.com/",
    },
    Maven: {
      icon: mavenIcon,
      url: "https://maven.apache.org",
    },
    VSCode: {
      icon: vscodeIcon,
      url: "https://code.visualstudio.com",
    },
    IntelliJ: {
      icon: intelliJIcon,
      url: "https://maven.apache.org",
    },
    Eclipse: {
      icon: eclipseIcon,
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
        } group hover:bg-bg-primary border-b border-accent-primary`}
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
