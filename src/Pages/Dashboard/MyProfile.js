import React, { useEffect, useState } from "react";
import { useParams, useResolvedPath } from "react-router-dom";

const MyProfile = () => {
  const { _id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `https://manufacturer-website-server-side-steel.vercel.app/users/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h2>This is My Profile</h2>
      {user && (
        <p className="mt-2 text-xl text-secondary font-bold">
          Name :{user.users}
        </p>
      )}
    </div>
  );
};

export default MyProfile;
