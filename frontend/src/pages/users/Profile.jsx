import { useEffect, useState } from "react";
import { getProfile } from "../../services/users";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((data) => setProfile(data))
      .catch((err) => console.error(err));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Profile</h1>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}
