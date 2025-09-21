import React, { useState, useEffect } from "react";

const ClubList = () => {
  const [clubs, setClubs] = useState([]);
  const [noClubsMsg, setNoClubsMsg] = useState("");
  const [selectedClub, setSelectedClub] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/clubs");
        const data = await res.json();
        setClubs(data);
        if (data.length === 0) setNoClubsMsg("No clubs available");
      } catch (err) {
        console.error(err);
        setNoClubsMsg("Failed to load clubs. Please try again later.");
      }
    };
    fetchClubs();
  }, []);

  const handleJoinClick = (club) => setSelectedClub(club);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/clubs/${selectedClub._id}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      alert(result.message);
      setSelectedClub(null);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setNoClubsMsg("Failed to join club. Try again later.");
    }
  };

  return (
    <div>
      <h1>All Clubs</h1>
      {noClubsMsg && <p>{noClubsMsg}</p>}
      <div className="club-container">
        {clubs.map((club) => (
          <div className="club-card" key={club._id}>
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <p>Contact: {club.contactEmail || "N/A"}</p>
            <button onClick={() => handleJoinClick(club)}>Join Club</button>
          </div>
        ))}
      </div>

      {selectedClub && (
        <div className="join-form">
          <h2>Join {selectedClub.name}</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message (optional)" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setSelectedClub(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ClubList;
