import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";

const app = express();
app.use(cors());

const db = await connectDB();

app.get("/projects", async (req, res) => {
  try {
    const projects = await db.collection("projects").find().toArray();
    res.send(projects);
  } catch (error) {
    console.error("Error fetching projects", error);
  }
});

app.get("/technologies", async (req, res) => {
  try {
    const technologies = await db.collection("technologies").find().toArray();
    res.send(technologies);
  } catch (error) {
    console.error("Error fetching technologies", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
