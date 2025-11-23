 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      const res = await API.post("/auth/login", { username, password });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");   // ❤️ THIS FIXES THE REDIRECT
    } catch (error) {
      alert("Invalid login.");
    }
  };

  return (
    <div className="page">
      <h1>Login</h1>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn" onClick={submit}>Login</button>
    </div>
  );
}
