// src/layouts/MainLayout.jsx
import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
      <div className="app-container" style={styles.container}>
        {/* Header / Navbar */}
        <header style={styles.header}>
          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
          <Link to="/register" style={styles.link}>Register</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/profile" style={styles.link}>Profile</Link>
          <Link to="/logout" style={styles.link}>Logout</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <Outlet /> {/* Renders the current page here */}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Finance App. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "system-ui, sans-serif",
  },
  header: {
    background: "#1e293b", // slate-800
    padding: "1rem 0",
    color: "#fff",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
  },
  main: {
    flex: 1,
    padding: "2rem",
    textAlign: "center",
  },
  footer: {
    background: "#f1f5f9",
    textAlign: "center",
    padding: "1rem 0",
    borderTop: "1px solid #e2e8f0",
  },
};
