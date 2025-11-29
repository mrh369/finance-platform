export default function NotAuthorized() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>403 - Not Authorized</h1>
      <p>You don’t have permission to view this page.</p>
      <a href="/login" style={{ color: "#007bff", textDecoration: "none" }}>
        Go to Login
      </a>
    </div>
  );
}
