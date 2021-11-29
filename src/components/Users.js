import React, { useEffect, useState } from "react";
import Card from "./cards/Card";

const Users = ({ apiURL }) => {
  // state to store the ddetails from API
  const [users, setUsers] = useState([]);

  // fetching details from API and storing to the state
  useEffect(() => {
    fetch(apiURL)
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, [apiURL]);

  return (
    <>
      <div className="container">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* Card Component */}
          {users.map((user, key) => {
            return <Card key={key} user={user} apiURL={apiURL} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
