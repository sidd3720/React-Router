
import { useParams, Link } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>

      <Link to="/user/10">User 10</Link>
      {" | "}
      <Link to="/user/55">User 55</Link>
    </div>
  );
}

export default UserProfile;
