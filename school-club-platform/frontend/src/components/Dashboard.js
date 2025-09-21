import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ user }) {
  if (!user) return <p>Please <Link to="/login">login</Link> first.</p>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      {user.role === "leader" && <p>You can manage your club here.</p>}
      {user.role === "admin" && <p>You can manage all clubs and users here.</p>}
      <Link to="/">View Clubs</Link>
    </div>
  );
}

export default Dashboard;
