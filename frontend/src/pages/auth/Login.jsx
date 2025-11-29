import { useState } from "react";
import { loginUser } from "../../services/users";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");

    } catch (err) {
      console.log("Login error:", err);
      setMessage("Error logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to your Finance Dashboard</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input 
            type="email"
            placeholder="Email"
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Sign In</button>
        </form>

        <p className="login-footer">
          New here?{" "}
          <Link to="/register" className="login-link">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
