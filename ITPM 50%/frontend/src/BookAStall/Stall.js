import React from "react";
import { Tooltip } from "react-tooltip"; // Import the correct component
import "./stall.css";

const Stall = ({ status, onClick, price, stallNumber }) => {
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
    <div>
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
        data-tooltip-id="stall-tooltip"
        data-tooltip-content={`Price: Rs. ${price}`} // Tooltip content
        onClick={
          status === "booked" ? () => alert("This stall is booked.") : onClick
        }
      >
        {stallNumber}
      </div>

      <Tooltip
        id="stall-tooltip" // Matches the data-tooltip-id
        place="top"
        type="dark"
        effect="solid"
      />
    </div>
  );
};

export default Stall;
