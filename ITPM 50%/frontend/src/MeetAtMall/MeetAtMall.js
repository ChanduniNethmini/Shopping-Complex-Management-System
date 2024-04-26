import React, { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toCanvas } from "qrcode";
import "./meetAtMall.css";

const MeetAtMall = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [qrData, setQrData] = useState(""); // This will hold the QR code data
  const [cartItems, setCartItems] = useState([]); // Correctly initialize cartItems state
  const qrRef = useRef(null); // Reference to the QR code for downloading

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData && cartData.items) {
      const total = calculateCartTotal(cartData.items);
      setCartTotal(total);

      const qrInfo = {
        cartTotal: total,
        items: cartData.items.map((item) => ({
          itemID: item.itemID,
          itemName: item.itemName,
          quantity: item.quantity,
        })),
      };

      setCartItems(cartData.items); // Set the cartItems state
      setQrData(JSON.stringify(qrInfo)); // Prepare the data to be encoded in QR
    }
  }, []); // Empty dependency array to ensure this effect runs only once on component mount

  const calculateCartTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += parseFloat(item.itemPrice) * item.quantity;
    });
    return total.toFixed(2);
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

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>QR Code for Your Order</h2>
      <h6>Collect your order between 9 am- 10pm at order collecting center.</h6>
      <p>
        Please provide this qr code when you collecting the order and do payment
        to the counter.{" "}
      </p>
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
