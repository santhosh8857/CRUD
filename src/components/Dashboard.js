import React from "react";

const Dashboard = () => {
  return (
    <div className="text-center text-primary">
      <h3>Dashboard Component</h3>
      <div style={{ marginTop: "10%" }}>
        <span
          className="display-1 text-danger"
          style={{
            fontSize: "150px",
            fontFamily: "sans-serif",
          }}
        >
          C
        </span>
        <span
          className="display-1 text-primary"
          style={{
            fontSize: "150px",
            fontFamily: "sans-serif",
          }}
        >
          R
        </span>
        <span
          className="display-1 text-warning"
          style={{
            fontSize: "150px",
            fontFamily: "sans-serif",
          }}
        >
          U
        </span>
        <span
          className="display-1 text-success"
          style={{
            fontSize: "150px",
            fontFamily: "sans-serif",
          }}
        >
          D
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
