import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


function Payments() {
  return (
    <StripeCheckout
       amount ={500}
     />
  );
}

export default Payments;