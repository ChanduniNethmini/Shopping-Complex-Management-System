import React from "react";
import "./stall.css";

const Stall = ({ status, onClick }) => {
  const getColor = () => {
    switch (status) {
      case "booked":
        return "red";
      case "reserved":
        return "yellow";
      default:
        return "green";
    }
  };

  return (
    <div
      className="stall"
      style={{
        backgroundColor: getColor(),
        width: "50px",
        height: "50px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: status === "booked" ? "not-allowed" : "pointer",
      }}
      onClick={
        status === "booked" ? () => alert("This stall is booked.") : onClick
      }
    ></div>
  );
};

export default Stall;
