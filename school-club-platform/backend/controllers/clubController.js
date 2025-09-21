import Club from "../models/Club.js";

export const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch clubs" });
  }
};

export const joinClub = async (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;

  try {
    const club = await Club.findById(id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    club.members.push({ name, email, message });
    await club.save();

    res.json({ message: `Successfully joined ${club.name}!` });
  } catch (err) {
    res.status(500).json({ message: "Failed to join club" });
  }
};
