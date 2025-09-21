import mongoose from "mongoose";
import Club from "./models/Club.js";

const MONGO_URI = "mongodb://127.0.0.1:27017/school-clubs";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("MongoDB connected");

  await Club.deleteMany({}); // Clear existing
  const clubs = [
    { name: "Art Club", description: "Painting & sketching", contactEmail: "art@school.com" },
    { name: "Science Club", description: "Experiments & research", contactEmail: "science@school.com" },
    { name: "Music Club", description: "Singing & instruments", contactEmail: "music@school.com" },
  ];
  await Club.insertMany(clubs);

  console.log("Seed data added");
  process.exit();
})
.catch(err => console.error(err));
