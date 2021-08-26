import Axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstants';
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstants";

export const createOrder = (order) => async(dispactch, getState) =>{
    dispactch({type: ORDER_CREATE_REQUEST, payload: order});
    try{
        const {userSignin :{userInfo}} = getState();
        const {data} = await Axios.post('/api/orders', order,{
            headers:{ Authorization:`Bearer ${userInfo.token}`}
        });
        dispactch({type:ORDER_CREATE_SUCCESS, payload: data.order});
        dispactch({type:CART_EMPTY});
        localStorage.removeItem('cartItems');
    }catch(error){
        dispactch({type: ORDER_CREATE_FAIL, payload : error.response && error.response.data.message ? error.response.data.message: error.message, })
    }
}