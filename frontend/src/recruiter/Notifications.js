import React from "react";

function Notifications() {
  const notifications = [
    "New application received for Frontend Developer.",
    "Interview reminder: Candidate Jumana at 10 AM tomorrow.",
  ];

  return (
    <div className="card">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
