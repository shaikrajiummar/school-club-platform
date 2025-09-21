import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ClubDetail() {
  const { id } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/clubs/${id}`)
      .then((res) => res.json())
      .then((data) => setClub(data));
  }, [id]);

  if (!club) return <p>Loading...</p>;

  return (
    <div>
      <h2>{club.name}</h2>
      <p>{club.description}</p>
      <p>Contact: {club.contactEmail}</p>
      <h3>Announcements:</h3>
      <ul>
        {club.announcements.map((a, index) => (
          <li key={index}>{a.message} - {new Date(a.date).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClubDetail;
