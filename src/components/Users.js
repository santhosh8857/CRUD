import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { useHistory } from "react-router";

const Users = ({ apiURL }) => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const getDetails = () => {
    fetch(apiURL)
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetails();
  }, []);

  const viewUser = (userId) => {
    history.push(`user/${userId}`);
  };

  const deleteUser = (id) => {
    var confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      axios
        .delete(`${apiURL}/${id}`)
        .then((resp) => {
          alert("User Deleted!");
          console.log(resp);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th className="text-primary">Name</th>
            <th className="text-primary">Email</th>
            <th className="text-primary">Mobile no.</th>
            <th className="text-primary">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            return (
              <tr key={key}>
                <td>{user.name}</td>
                <td>{user.email_id}</td>
                <td>{user.mobile_no}</td>
                <td>
                  <button
                    className="btn btn-outline-success"
                    style={{ marginRight: "5px" }}
                    onClick={() => {
                      viewUser(user.id);
                    }}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    style={{ marginRight: "5px" }}
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                  <button className="btn btn-outline-warning">Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
