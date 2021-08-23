import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePyamentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentMethodScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    if(!userInfo){
        props.history.push('/signin');
    }
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(savePyamentMethod(paymentMethod));
        props.history.push('/place-order');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler} >
                <div>
                    <h1>Payment method</h1>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" id="payPal" value="PayPal" required checked onChange={(e) => setPaymentMethod(e.target.value)}/>
                    <label htmlFor="payPal"> PayPal</label>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" id="stripe" value="Stripe" required onChange={(e) => setPaymentMethod(e.target.value)}/>
                    <label htmlFor="stripe"> Stripe</label>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit" >Continue</button>
                </div>
            </form>
        </div>
    )
}
