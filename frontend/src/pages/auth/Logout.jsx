import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove token from storage
    localStorage.removeItem("token");

    // Optional slight delay for navigating back to login page
    // Could also put a link on logout page to sign back in
    setTimeout(() => {
        navigate("/login");
    }, 2000);
    }, [navigate]);

  return (
    <div style={{ padding: "2rem", fontSize: "1.5rem" }}>
      You've been logged out successfully. Navigating to Login page...
    </div>
  );
}
