import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  contactEmail: String,
  announcements: [{ message: String }],
  members: [memberSchema],
});

const Club = mongoose.model("Club", clubSchema);
export default Club;
