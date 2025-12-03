import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

// 📩 Submit a new job application
router.post("/", async (req, res) => {
  try {
    const { candidateName, candidateEmail, jobTitle, resumeLink } = req.body;

    if (!candidateName || !candidateEmail || !jobTitle || !resumeLink) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    const newApp = new Application({
      candidateName,
      candidateEmail,
      jobTitle,
      resumeLink,
    });

    await newApp.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit application" });
  }
});

// 📋 Fetch all job applications (Recruiter view)
router.get("/", async (req, res) => {
  try {
    const apps = await Application.find();
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

export default router;
