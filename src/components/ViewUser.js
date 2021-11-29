import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ViewUser = ({ apiURL }) => {
  // useParams hook to take the id from the URl query
  let { id } = useParams();

  // state to store the user details from the API
  const [user, setUser] = useState([]);

  // fetching a user details from API using id
  useEffect(() => {
    fetch(`${apiURL}/${id}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [apiURL, id]);
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.email_id}</h1>
      <h1>{user.mobile_no}</h1>
    </>
  );
};

export default ViewUser;
