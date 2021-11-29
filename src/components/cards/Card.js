import React from "react";
import axios from "axios";
import cardImg from "../img/card.png";
import { useHistory } from "react-router";

const Card = ({ user, apiURL }) => {
  const history = useHistory();

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

  const viewUser = (userId) => {
    history.push(`user/${userId}`);
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top h-50" src={cardImg} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{user.name}</h5>
            <h6>{user.email_id}</h6>
            <h6>{user.mobile_no}</h6>
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
