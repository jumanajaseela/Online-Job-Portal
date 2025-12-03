import React from "react";

function Notifications() {
  const notifications = [
    "Your application for Frontend Developer is under review.",
    "Interview scheduled for Backend Developer on 3rd Nov.",
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

