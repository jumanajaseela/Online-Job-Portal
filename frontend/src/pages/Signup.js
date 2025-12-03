import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("⚠️ Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", form);

      if (res.data) {
        alert("✅ Account created successfully!");
        navigate("/login"); // redirect to login after success
      }
    } catch (err) {
      alert(err.response?.data?.msg || "❌ Signup failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="candidate">Candidate</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{ color: "#004080", cursor: "pointer", fontWeight: "bold" }}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
