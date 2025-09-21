import express from "express";
import { getAllClubs } from "../controllers/clubController.js";

const router = express.Router();

router.get("/", getClubs);
router.post("/:id/join", joinClub);

export default router;
