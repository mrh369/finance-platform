import React, { useState } from "react";
import TextField from "../components/ui/TextField";
import Select from "../components/ui/Select";
import Checkbox from "../components/ui/Checkbox";
import Toggle from "../components/ui/Toggle";
import Button from "../components/ui/Button";
import "../styles/shared.css";

export default function ComponentsDemo() {
  const [name, setName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>UI Components Demo</h1>
        <p style={styles.subtitle}>
          Preview and test your reusable field components
        </p>

        <form onSubmit={handleSubmit}>
          <div style={styles.section}>
            <TextField
              label="Full Name"
              name="fullName"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.section}>
            <Select
              label="Account Type"
              name="accountType"
              options={[
                { label: "Checking", value: "checking" },
                { label: "Savings", value: "savings" },
                { label: "Investment", value: "investment" },
              ]}
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              placeholder="Select an account type"
            />
          </div>

          <div style={styles.section}>
            <Checkbox
              label="I agree to the terms and conditions"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
          </div>

          <div style={styles.section}>
            <Toggle
              label="Enable notifications"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </div>

          <div style={styles.section}>
            <Button
              type="submit"
              label="Submit"
              variant="primary"
              disabled={!agreed || !accountType || !name}
            />
          </div>
        </form>

        {submitted && (
          <div style={styles.output}>
            <h3>Form Submission Data:</h3>
            <pre>
              {JSON.stringify(
                { name, accountType, agreed, notifications },
                null,
                2
              )}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: "#0f172a",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2.5rem",
    borderRadius: "1rem",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
    maxWidth: "480px",
    width: "100%",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#64748b",
    marginBottom: "2rem",
  },
  section: {
    marginBottom: "1.5rem",
  },
  output: {
    marginTop: "2rem",
    backgroundColor: "#f1f5f9",
    padding: "1rem",
    borderRadius: "0.5rem",
    fontSize: "0.9rem",
  },
};
