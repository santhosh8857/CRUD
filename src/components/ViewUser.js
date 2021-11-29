import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ViewCard from "./cards/ViewCard";

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
      <ViewCard user={user} />
    </>
  );
};

export default ViewUser;
