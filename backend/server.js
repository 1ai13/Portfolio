import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import { PORT, GIT_TOKEN } from "./config.js";
import contactEmail from "./emailService.js";

const GIT_URL = "https://api.github.com/users/1ai13/";

const app = express();
app.use(cors());
app.use(express.json());

const db = await connectDB();

app.get("/projects", async (req, res) => {
  try {
    const projects = await db.collection("projects").find().toArray();
    res.send(projects);
  } catch (error) {
    console.error("Error fetching projects", error);
    res.status(500).send("Error fetching projects");
  }
});

app.get("/technologies", async (req, res) => {
  try {
    const technologies = await db.collection("technologies").find().toArray();
    res.send(technologies);
  } catch (error) {
    console.error("Error fetching technologies", error);
    res.status(500).send("Error fetching technologies");
  }
});

app.get("/git-data", async (req, res) => {
  let json = {};
  try {
    const followers = await getGitData("followers");
    json.followers = followers;
    const following = await getGitData("following");
    json.following = following;
    res.json(json);
  } catch (error) {
    console.error("Error fetching git data", error);
    res.status(500).send("Error fetching git data");
  }
});

app.post("/contact", async (req, res) => {
  try {
    await contactEmail(req.body);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function getGitData(url) {
  const data = await fetch(GIT_URL + url, {
    headers: {
      Authorization: "token " + GIT_TOKEN,
    },
  });
  const f = await data.json();
  return f;
}
