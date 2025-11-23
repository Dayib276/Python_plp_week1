 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await API.post("/auth/register", { username, password });

    navigate("/login");   // ❤️ Redirect works correctly
  };

  return (
    <div className="page">
      <h1>Create Account</h1>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn" onClick={submit}>Register</button>
    </div>
  );
}
