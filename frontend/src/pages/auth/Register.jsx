import { useState } from "react";
import { registerUser } from "../../services/users";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser({ username, email, password, confirmPassword });
      setMessage(data);
    } catch (err) {
      setMessage("Error registering user");
      console.error(err);
    }
    //Navigate to login page after successful registration?
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Create Your Account</h1>
        <p className="login-subtitle">
          Get started with your personal finance dashboard
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> {/*Some text here about password requirements? */}
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="login-input"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Create Account
          </button>
        </form>

        <p className="login-footer">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
