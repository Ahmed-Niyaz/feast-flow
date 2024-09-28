import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../Context'
import './PlaceOrder.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export default function PlaceOrder() {
  
  const navigate = useNavigate();
  const { getTotalCartAmount, token, foodList, cartItems, url } = useGlobalContext();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  })

  function onChangeHandler(e) {
    const {name, value} = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }  

  async function placeOrder(e) {
    e.preventDefault();

    let orderItems = [];
    foodList.map((item) => {
      if(cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    }

    let response = await axios.post(url+'/api/order/place', orderData, {headers: {token}})
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    } else {
      alert('Error sending the address and item data')
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token]);

  return (
    <form className='place-order' onSubmit={placeOrder}>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last Name' />
        </div>
          <input required onChange={onChangeHandler} value={data.email} name='email' type='email' placeholder='Email address' />
          <input required onChange={onChangeHandler} value={data.street} name='street' type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input required onChange={onChangeHandler} value={data.city} name='city' type='text' placeholder='City' />
          <input required onChange={onChangeHandler} value={data.state} name='state' type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input required onChange={onChangeHandler} value={data.zipcode} name='zipcode' type='text' placeholder='Zip code' />
          <input required onChange={onChangeHandler} value={data.country} name='country' type='text' placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} value={data.phone} name='phone' type='tel' placeholder='Phone' />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}