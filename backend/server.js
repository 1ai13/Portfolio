import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import contactEmail from "./emailService.js";

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

app.post("/contact", async (req, res) => {
  try {
    await contactEmail(req.body);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).send("Error sending email: " + error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
