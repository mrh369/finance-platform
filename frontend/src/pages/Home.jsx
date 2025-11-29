import { useEffect, useState } from "react";
import { getDemoMessage } from "../services/users";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getDemoMessage()
      .then((data) => setMessage(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", margin: "auto" }}>
      <h1>React + Django Demo</h1>
      <p>{message}</p>
    </div>
  );
}
