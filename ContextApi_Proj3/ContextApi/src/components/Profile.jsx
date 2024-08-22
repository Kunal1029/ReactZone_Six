import React from "react";
import UserContex from "../context/UserContext";

function Profile() {
  const { user } = React.useContext(UserContex);

  if (!user) return <div>Please Login</div>;
  return <div>hi {user.username} ,ur pass {user.password}</div>;
}

export default Profile;
