import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


function Payments() {
      debugger;
  return (
    <StripeCheckout
       amount ={500}
       token = { token => console.log(token)}
       stripeKey={ process.env.REACT_APP_STRIPE_KEY }
     />
  );
}

export default Payments;