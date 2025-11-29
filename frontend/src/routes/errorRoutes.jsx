import { Route } from "react-router-dom";
import NotFound from "../pages/errors/NotFound";
import NotAuthorized from "../pages/errors/NotAuthorized";

export default function ErrorRoutes() {
  return (
    <>
      <Route path="/unauthorized" element={<NotAuthorized />} />
      <Route path="*" element={<NotFound />} />
    </>
  );
}
