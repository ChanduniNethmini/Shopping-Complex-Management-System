import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import insert from "../../images/brands.gif";

const Payment = ({ cartTotal, onToken }) => {
  return (
    <div>
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51P7jrFSBwVfyKvSe6zLOs01vRh5f3IDsJt01Jb7QBMsKPKddVWrG6sTWoPyaXNPazrzo681UmZ0odYVBuOcyzTXb00c7AUIj7s"
        amount={cartTotal * 100} // Stripe expects the amount in cents
        currency="LKR"
        name="E-SHOP"
        description="Order Payment"
        image={insert}
        billingAddress
        shippingAddress
      >
        <button className="btn btn-primary textsize">Pay with Card</button>
      </StripeCheckout>
      <ToastContainer />
    </div>
  );
};

export default Payment;
