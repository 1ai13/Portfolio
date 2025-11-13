import { connectDB } from "./db.js";

const db = await connectDB();
const projects = [
  {
    title: "Ninja Survivor",
    description:
      "TOP-DOWN Survival Arena Shooter, survive the waves of enemies and defeat the final boss!",
    type: "Game",
    links: [
      {
        source: "github",
        url: "https://github.com/1ai13/NinjaSurvivor",
      },
      {
        source: "itch.io",
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
    links: [
      {
        source: "github",
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
    links: [
      {
        source: "github",
        url: "https://github.com/1ai13/NoWayLabyrinth",
      },
      {
        source: "itch.io",
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
    links: [
      {
        source: "github",
        url: "https://github.com/1ai13/DrawSync",
      },
    ],
    tags: ["Swing", "TCPSockets", "Java", "Chat"],
  },
  {
    title: "Snake Game",
    description: "Arcade stylish game, eat the food but care with the bonuses!",
    type: "Game",
    links: [
      {
        source: "github",
        url: "https://github.com/1ai13/SnakeGame",
      },
      {
        source: "itch.io",
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
    links: [
      {
        source: "github",
        url: "https://github.com/1ai13/PongGame",
      },
      {
        source: "itch.io",
        url: "https://1ai-13.itch.io/pong-game",
      },
    ],
    tags: ["LibGdx", "AI", "1v1"],
  },
];

try {
  await db.collection("projects").deleteMany({});
  await db.collection("projects").insertMany(projects);
} catch (error) {
  console.error("Error inserting projects", error);
} finally {
  await db.client.close();
  console.log("Closing database connection");
  process.exit();
}
