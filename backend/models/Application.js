import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  candidateName: { type: String, required: true },
  candidateEmail: { type: String, required: true },
  jobTitle: { type: String, required: true },
  resumeLink: { type: String },
  appliedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Application", applicationSchema);
