import React, { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toCanvas } from "qrcode";
import "./meetAtMall.css";

const MeetAtMall = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [qrData, setQrData] = useState(""); // This will hold the QR code data
  const [cartItems, setCartItems] = useState([]); // Correctly initialize cartItems state
  const qrRef = useRef(null); // Reference to the QR code for downloading
  const [date, setDate] = useState(""); // User input for date
  const [time, setTime] = useState("");

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData && cartData.items) {
      const total = calculateCartTotal(cartData.items);
      setCartTotal(total);
      setCartItems(cartData.items); // Set the cartItems state
    }
  }, []); // Empty dependency array to ensure this effect runs only once on component mount

  const calculateCartTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += parseFloat(item.itemPrice) * item.quantity;
    });
    return total.toFixed(2);
  };

  const generateQrData = () => {
    const qrInfo = {
      date: date, // Include user-supplied date
      time: time, // Include user-supplied time
      cartTotal: cartTotal, // Cart total
      items: cartItems.map((item) => ({
        itemID: item.itemID,
        itemName: item.itemName,
        quantity: item.quantity,
      })),
    };
    setQrData(JSON.stringify(qrInfo)); // Update QR data
  };

  const downloadQR = () => {
    if (qrRef.current) {
      toCanvas(qrRef.current, qrData, (error) => {
        if (error) {
          console.error(error);
          return;
        }

        const canvas = qrRef.current;
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qr_code.png";
        link.click();
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    generateQrData(); // Generate the new QR data
  };
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Format the date to YYYY-MM-DD for input type="date"
  const minDate = tomorrow.toISOString().split("T")[0];
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>QR Code for Your Order</h2>
      <h6>Collect your order between 9 am- 10pm at order collecting center.</h6>
      <p>
        Please provide this qr code when you collecting the order and do payment
        to the counter.{" "}
      </p>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>PickUp Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="inputstyle"
            min={minDate}
          />
        </div>
        <div>
          <label>PickUp Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="inputstyle"
          />
        </div>
        <button className="downloadbutton" type="submit">
          Generate QR Code
        </button>
      </form>
      <br />
      <div>
        <QRCode value={qrData} size={256} />
      </div>
      <button className="downloadbutton" onClick={downloadQR}>
        Download QR Code
      </button>
      <canvas ref={qrRef} style={{ display: "none" }} />
      <div>
        <h4>Total: Rs. {cartTotal}</h4>
        <h5>Items:</h5>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.itemName} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MeetAtMall;
