import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// Create Job
router.post("/", async (req, res) => {
  const { title, company, location, description, skills, recruiterId } = req.body;
  try {
    const job = await Job.create({ title, company, location, description, skills, recruiterId });
    res.json(job);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Get all Jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

export default router;
