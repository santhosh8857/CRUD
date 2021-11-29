import React from "react";
import { useHistory } from "react-router";
import cardImg from "../img/card.png";

const ViewCard = ({ user }) => {
  const history = useHistory();

  // fuction to call the edituser component using history
  const editUser = (id) => {
    history.push(`/edit-user/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="card">
            <img className="card-img-top" src={cardImg} alt="..." />
            <div className="card-body p-4">
              <div className="text-center">
                {/* User details */}
                <h5 className="fw-bolder">{user.name}</h5>
                <h6>{user.email_id}</h6>
                <h6>{user.mobile_no}</h6>
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <button
                  className="btn btn-outline-dark"
                  style={{ marginRight: "5px" }}
                  onClick={() => {
                    editUser(user.id);
                  }}
                >
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCard;
