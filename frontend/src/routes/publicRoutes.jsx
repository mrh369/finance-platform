import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ComponentsDemo from "../pages/ComponentsDemo";
import Logout from "../pages/auth/Logout";

export default function PublicRoutes() {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/components-demo" element={<ComponentsDemo />} />
    </>
  );
}
