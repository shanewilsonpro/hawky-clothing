import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IQmPCHfUehF4g3knDxWKGmN6mE2dTgvx27KJ29grkx3VmiajwUVSuuhTF5imdGpnJivAt69MiHg1sMpGlocQDcw00FGFu9juF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Hawky Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Ufa.svg"
      description={"Your total is $" + price}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
