import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clubRoutes from "./routes/clubRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
}));
app.use(express.json());

app.use("/api/clubs", clubRoutes);

app.get("/", (req, res) => {
  res.send("School Club Platform API running...");
});

export default app;
