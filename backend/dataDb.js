import { connectDB } from "./db.js";

const db = await connectDB();
const projects = [
  {
    title: "Ninja Survivor",
    description_en:
      "TOP-DOWN Survival Arena Shooter, survive the waves of enemies and defeat the final boss!",
    description_es:
      "Shooter de supervivencia en arena vista de desde arriba, ¡Sobrevive a las oleadas de enemigos y derrota al jefe!",
    type: "Game",
    logo: "ninja-survivor-logo.png",
    links: [
      { source: "Itch.io", url: "https://1ai-13.itch.io/ninja-survivor" },
      { source: "GitHub", url: "https://github.com/1ai13/NinjaSurvivor" },
    ],
    tags: ["Godot", "2D", "C#", "Pixel Art", "Waves", "Buffs"],
  },
  {
    title: "Portfolio",
    description_en:
      "The Portfolio you are visiting. Just in case you want to inspect the code! Built with JS, React, Express, CSS and HTML, deployed on Render.",
    description_es:
      "El sitio web que estás visitando. ¡Por si quisieras echarle un ojo al código! Construido con JS, React, Express, CSS y HTML, desplegado en Render",
    type: "App",
    logo: "logo-back.jpg",
    links: [
      {
        source: "Web",
        url: "#",
      },
      {
        source: "GitHub",
        url: "https://github.com/1ai13/Portfolio",
      },
    ],
    tags: [
      "Portfolio",
      "FullStack",
      "JavaScript",
      "React",
      "Express",
      "HTML",
      "MongoDB",
    ],
  },
  {
    title: "Draw Sync",
    description_en:
      "Cooperative Drawing Board, draw in a White Board with different brushes and a local chat",
    description_es:
      "Pizarra cooperativa, dibuja en una pizarra con diferentes pinceles y un chat local",
    type: "App",
    logo: "draw-sync-logo.png",
    links: [{ source: "GitHub", url: "https://github.com/1ai13/DrawSync" }],
    tags: ["Swing", "TCPSockets", "Java", "Chat", "Draw", "Local"],
  },
  {
    title: "TomoList",
    description_en:
      "Basic Social Media, sign up and search your friends, you can contact them or publish your own posts",
    description_es:
      "Red social básica, regístrate y busca a tus amigos, puedes contactarlos o publicar tus propias fotos",
    type: "App",
    logo: "tomolist-logo.png",
    links: [{ source: "GitHub", url: "https://github.com/1ai13/TomoList" }],
    tags: ["Social", "TFG", "Java", "Spring", "Chat", "Posts", "Login"],
  },
  {
    title: "No Way Labyrinth",
    description_en:
      "A mage trapped in a labyrinth, explore it, find the keys and try to escape alive!",
    description_es:
      "Un mago atrapado en un laberinto, ¡Explóralo, encuentra las llaves y trata de escapar con vida!",
    type: "Game",
    logo: "nowaylaby-logo.png",
    links: [
      { source: "Itch.io", url: "https://1ai-13.itch.io/no-way-labyrinth" },
      { source: "GitHub", url: "https://github.com/1ai13/NoWayLabyrinth" },
    ],
    tags: ["LibGdx", "2D", "Java", "Pixel Art", "Maze"],
  },
  {
    title: "Snake Game",
    description_en:
      "Arcade Snake game, you can eat everything at your own risk!",
    description_es:
      "Snake tipo arcade, ¡Puedes comerlo todo bajo tu propio riesgo!",
    type: "Game",
    logo: "snake-game-logo.png",
    links: [
      { source: "Itch.io", url: "https://1ai-13.itch.io/snake-game" },
      { source: "GitHub", url: "https://github.com/1ai13/SnakeGame" },
    ],
    tags: ["LibGdx", "Arcade", "Java", "Snake", "Food"],
  },
  {
    title: "Pong Game",
    description_en:
      "Classic pong where you can 1v1 the AI or play with a friend!",
    description_es:
      "Pong clásico donde puedes jugar 1v1 contra la IA o con un amigo",
    type: "Game",
    logo: "pong-game-logo.jpg",
    links: [
      { source: "Itch.io", url: "https://1ai-13.itch.io/pong-game" },
      { source: "GitHub", url: "https://github.com/1ai13/PongGame" },
    ],
    tags: ["LibGdx", "AI", "Multiplayer", "Java", "First Game"],
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
    name: "DevOps",
    category: "Tools",
    icon: "devops-icon.png",
    url: "https://es.wikipedia.org/wiki/DevOps",
  },
  {
    name: "Postman",
    category: "Tools",
    icon: "postman-icon.png",
    url: "https://www.postman.com",
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
    name: "Salesforce",
    category: "Tools",
    icon: "salesforce-icon.png",
    url: "https://www.salesforce.com",
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
