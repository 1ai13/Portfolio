import { connectDB } from "./db.js";

const db = await connectDB();

try {
  await db.collection("projects").deleteMany({});
  await db.collection("projects").insertMany([
    {
      title: "Ninja Survivor",
      description: "TOP-DOWN Survival Arena Shooter",
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
      tags: ["Godot", "2D", "C#"],
    },
    {
      title: "TomoList",
      description: "Basic Social Media",
      type: "Web",
      links: [
        {
          source: "github",
          url: "https://github.com/1ai13/TomoList",
        },
      ],
      tags: ["Social", "TFG"],
    },
    {
      title: "No Way Labyrinth",
      description: "Mage trapped in a labyrinth",
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
      tags: ["LibGdx", "2D", "Java"],
    },
    {
      title: "Draw Sync",
      description: "Cooperative Drawing Board",
      type: "Web",
      links: [
        {
          source: "github",
          url: "https://github.com/1ai13/DrawSync",
        },
      ],
      tags: ["Swing", "TCPSockets", "Java"],
    },
  ]);
} catch (error) {
  console.error("Error inserting projects", error);
} finally {
  await db.client.close();
  console.log("Closing database connection");
  process.exit();
}
