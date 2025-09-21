// backend/src/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "leader"], default: "student" },
  joinedClubs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
  clubsLed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }]
}, { timestamps: true });

export default mongoose.model("User", userSchema);
