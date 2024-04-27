import React, { useState, useEffect } from "react";
import "./stall.css";

const Stall = ({ status, onClick, price }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  console.log(price);
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
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
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
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={
        status === "booked" ? () => alert("This stall is booked.") : onClick
      }
    >
      {showTooltip && <div className="tooltip">{`Price: ${price}`}</div>}
    </div>
  );
};

export default Stall;
