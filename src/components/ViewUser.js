import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ViewUser = ({ apiURL }) => {
  let { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/${id}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.email_id}</h1>
      <h1>{user.mobile_no}</h1>
    </>
  );
};

export default ViewUser;
