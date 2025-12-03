import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // recruiter or candidate
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role!");
      return;
    }

      // Mock login success
    localStorage.setItem("role", role);
    alert(`${role === "candidate" ? "Candidate" : "Recruiter"} login successful!`);
    navigate("/"); // 👈 go to Home page instead of dashboard
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="role-select">
          <label>
            <input
              type="radio"
              name="role"
              value="candidate"
              onChange={(e) => setRole(e.target.value)}
            />
            Candidate
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="recruiter"
              onChange={(e) => setRole(e.target.value)}
            />
            Recruiter
          </label>
          
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
