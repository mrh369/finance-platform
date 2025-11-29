import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";
import ErrorRoutes from "./errorRoutes";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {PublicRoutes()}
        {PrivateRoutes()}
        {ErrorRoutes()}
      </Routes>
    </Router>
  );
}
