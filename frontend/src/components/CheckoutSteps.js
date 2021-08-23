import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : 'not_active'}>Sign-In</div>
      <div className={props.step2 ? 'active' : 'not_active'}>Shipping</div>
      <div className={props.step3 ? 'active' : 'not_active'}>Payment</div>
      <div className={props.step4 ? 'active' : 'not_active'}>Place Order</div>
    </div>
  );
}