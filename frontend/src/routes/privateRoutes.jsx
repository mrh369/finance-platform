import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Profile from "../pages/users/Profile";
import Dashboard from "../pages/Dashboard";
import RequireAuth from "./RequireAuth";

export default function PrivateRoutes() {
  return (
    <>
      <Route element={<RequireAuth><MainLayout /></RequireAuth>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </>
  );
}
