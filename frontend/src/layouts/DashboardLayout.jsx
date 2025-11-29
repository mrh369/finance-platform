export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "250px" }}>Sidebar links here</aside>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}
