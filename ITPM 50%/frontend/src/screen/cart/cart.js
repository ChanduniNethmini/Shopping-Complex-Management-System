import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import { API_URL } from "../../constants/constants";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  console.log("Items:", items);

  const calculateCartTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += parseFloat(item.itemPrice) * item.quantity;
    });
    return total.toFixed(2);
  };
  const cartTotal = calculateCartTotal(items);

  const cartData = {
    items: items,
    cartTotal: cartTotal,
  };

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
    console.log(cartData);
  }, [cartData]);

  return (
    <div style={{ height: "700px" }}>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h3 className="text">
              <h2 className="text-center">
                <font face="Comic sans MS" size=" 6">
                  My Shopping Cart
                </font>{" "}
              </h2>
            </h3>
            <h3 className="text">
              {" "}
              Product Types: ({totalUniqueItems})Total Items: ({totalItems})
            </h3>
            <br />
            <table
              className="table table-light table-hover m-0"
              style={{ fontSize: "20px" }}
            >
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.itemImage} style={{ height: "9rem" }} />
                      </td>
                      <td>{item.itemName}</td>
                      <td>{item.itemPrice}</td>
                      <td> Quantity ({item.quantity})</td>
                      <td>
                        <button
                          style={{ height: "40px", width: "40px" }}
                          className="btn btn-primary m-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          --
                        </button>
                        <button
                          style={{ height: "40px", width: "40px" }}
                          className="btn btn-primary m-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          style={{ height: "40px", width: "70px" }}
                          className="btn btn-danger ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="col-auto ms-auto">
            <br />
            <br />
            <h2>Total Price: Rs.{cartTotal}</h2>
          </div>
          <br />
          <div className="col-auto">
            <br />
            <button
              className="btn btn-danger m-2"
              onClick={() => emptyCart()}
              style={{ height: "40px", width: "80px" }}
            >
              Clear Cart
            </button>
            <br />
            {/* <button className="btn btn-primary m-2">
              <a
                href="/order"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Proceed to Checkout
              </a>
            </button> */}
            {/* Rest of your component JSX */}
            <button className="btn btn-primary m-2">
              <Link
                to={{
                  pathname: "/order",
                  state: { cartData: cartData },
                }}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
      </section>
      <div class="ibox">
        <div class="ibox-title text-center">
          <h5>Support</h5>
        </div>
        <div class="ibox-content text-center">
          <h3>
            <i class="fa fa-phone"></i> +94 100 783 001
          </h3>
          <span class="small">
            Please contact with us if you have any questions. We are avalible
            24h.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
