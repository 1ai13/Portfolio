import { connectDB } from "./db.js";

const db = await connectDB();
const projects = [
  {
    title: "Ninja Survivor",
    description:
      "TOP-DOWN Survival Arena Shooter, survive the waves of enemies and defeat the final boss!",
    type: "Game",
    logo: "ninja-survivor-logo.png",
    links: [
      {
        source: "GitHub",
        url: "https://github.com/1ai13/NinjaSurvivor",
      },
      {
        source: "Itch.io",
        url: "https://1ai-13.itch.io/ninja-survivor",
      },
    ],
    tags: ["Godot", "2D", "C#", "Pixel Art", "Waves"],
  },
  {
    title: "TomoList",
    description:
      "Basic Social Media, sign up, search your friends, contact them and publish your posts",
    type: "App",
    logo: "tomolist-logo.png",
    links: [
      {
        source: "GitHub",
        url: "https://github.com/1ai13/TomoList",
      },
    ],
    tags: ["Social", "TFG", "Java", "Spring", "Chat"],
  },
  {
    title: "No Way Labyrinth",
    description:
      "Mage trapped in a labyrinth, explore it, find the keys and try to escape alive!",
    type: "Game",
    logo: "nowaylaby-logo.png",
    links: [
      {
        source: "GitHub",
        url: "https://github.com/1ai13/NoWayLabyrinth",
      },
      {
        source: "Itch.io",
        url: "https://1ai-13.itch.io/no-way-labyrinth",
      },
    ],
    tags: ["LibGdx", "2D", "Java", "Pixel Art"],
  },
  {
    title: "Draw Sync",
    description:
      "Cooperative Drawing Board, draw in a White Board with different brushes with chat room",
    type: "App",
    logo: "draw-sync-logo.png",
    links: [
      {
        source: "GitHub",
        url: "https://github.com/1ai13/DrawSync",
      },
    ],
    tags: ["Swing", "TCPSockets", "Java", "Chat"],
  },
  {
    title: "Snake Game",
    description: "Arcade stylish game, eat the food but care with the bonuses!",
    type: "Game",
    logo: "snake-game-logo.png",
    links: [
      {
        source: "GitHub",
        url: "https://github.com/1ai13/SnakeGame",
      },
      {
        source: "Itch.io",
        url: "https://1ai-13.itch.io/snake-game",
      },
    ],
    tags: ["LibGdx", "Arcade", "Java", "Snake"],
  },
  {
    title: "Pong Game",
    description:
      "Classic pong where you can 1v1 the AI or play with your friend!",
    type: "Game",
    logo: "pong-game-logo.jpg",
    links: [
      {
        source: "GitHub",
        url: "https://github.com/1ai13/PongGame",
      },
      {
        source: "Itch.io",
        url: "https://1ai-13.itch.io/pong-game",
      },
    ],
    tags: ["LibGdx", "AI", "1v1"],
  },
];

const technologies = [
  {
    name: "HTML",
    category: "FrontEnd",
    icon: "html-icon.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    category: "FrontEnd",
    icon: "css-icon.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    category: "FrontEnd",
    icon: "js-icon.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Bootstrap",
    category: "FrontEnd",
    icon: "bootstrap-icon.png",
    url: "https://getbootstrap.com",
  },
  {
    name: "TailwindCSS",
    category: "FrontEnd",
    icon: "tailwind-icon.png",
    url: "https://tailwindcss.com",
  },
  {
    name: "jQuery",
    category: "FrontEnd",
    icon: "jquery-icon.png",
    url: "https://jquery.com/",
  },
  {
    name: "React",
    category: "FrontEnd",
    icon: "react-icon.png",
    url: "https://reactjs.org/",
  },
  {
    name: "Vite",
    category: "FrontEnd",
    icon: "vite-icon.png",
    url: "https://vite.dev",
  },
  {
    name: "Swing",
    category: "FrontEnd",
    icon: "java-icon.png",
    url: "https://docs.oracle.com/javase/8/docs/technotes/guides/swing/",
  },
  {
    name: "Thymeleaf",
    category: "FrontEnd",
    icon: "thymeleaf-icon.png",
    url: "https://www.thymeleaf.org/",
  },

  {
    name: "Java",
    category: "BackEnd",
    icon: "java-icon.png",
    url: "https://www.java.com/",
  },
  {
    name: "CSharp",
    category: "BackEnd",
    icon: "csharp-icon.png",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "Spring",
    category: "BackEnd",
    icon: "spring-icon.png",
    url: "https://spring.io/",
  },
  {
    name: "NodeJS",
    category: "BackEnd",
    icon: "node-js-icon.png",
    url: "https://nodejs.org/",
  },
  {
    name: "ExpressJS",
    category: "BackEnd",
    icon: "express-icon.png",
    url: "https://expressjs.com/",
  },
  {
    name: "SQL",
    category: "BackEnd",
    icon: "sql-icon.png",
    url: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    name: "MySQL",
    category: "BackEnd",
    icon: "mysql-icon.png",
    url: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    category: "BackEnd",
    icon: "mongodb-icon.png",
    url: "https://www.mongodb.com/",
  },
  {
    name: "JSON",
    category: "BackEnd",
    icon: "json-icon.png",
    url: "https://www.json.org/json-es.html",
  },
  {
    name: "XML",
    category: "BackEnd",
    icon: "xml-icon.png",
    url: "https://www.w3.org/XML",
  },

  {
    name: "Git",
    category: "Tools",
    icon: "git-icon.png",
    url: "https://git-scm.com/",
  },
  {
    name: "Godot",
    category: "Tools",
    icon: "godot-icon.png",
    url: "https://godotengine.org/",
  },
  {
    name: "LibGDX",
    category: "Tools",
    icon: "libgdx-icon.png",
    url: "https://libgdx.com/",
  },
  {
    name: "Gradle",
    category: "Tools",
    icon: "gradle-icon.png",
    url: "https://gradle.org/",
  },
  {
    name: "NPM",
    category: "Tools",
    icon: "npm-icon.png",
    url: "https://www.npmjs.com/",
  },
  {
    name: "Maven",
    category: "Tools",
    icon: "maven-icon.png",
    url: "https://maven.apache.org",
  },
  {
    name: "VSCode",
    category: "Tools",
    icon: "vscode-icon.png",
    url: "https://code.visualstudio.com",
  },
  {
    name: "IntelliJ",
    category: "Tools",
    icon: "intelliJ-icon.png",
    url: "https://www.jetbrains.com/idea/",
  },
  {
    name: "Eclipse",
    category: "Tools",
    icon: "eclipse-icon.png",
    url: "https://eclipseide.org",
  },
];

try {
  await db.collection("projects").deleteMany({});
  await db.collection("projects").insertMany(projects);
  await db.collection("technologies").deleteMany({});
  await db.collection("technologies").insertMany(technologies);
} catch (error) {
  console.error("Error inserting data", error);
} finally {
  await db.client.close();
  console.log("Closing database connection");
  process.exit();
}
