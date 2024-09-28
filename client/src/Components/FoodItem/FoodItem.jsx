import { useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { useGlobalContext } from '../../Context';

export default function FoodItem({ _id, name, price, description, image }) {
  
  const { cartItems, addToCart, removeFromCart, url} = useGlobalContext();
  
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={ url + '/images/' + image } alt='food-img' />
        {
          !cartItems[_id] 
            ? 
            <img className='add' onClick={() => addToCart(_id)} src={assets.add_icon_white} alt='add-icon'/>
            :
            <div className='food-item-counter'>
              <img onClick={() => removeFromCart(_id)} src={assets.remove_icon_red} alt='remove-icon' />
              <p>{cartItems[_id]}</p>
              <img onClick={() => addToCart(_id)} src={assets.add_icon_green} alt='add-icon-green'/>
            </div>
        }
      </div>
      <div className='food-item-info text-black'>
        <div className='food-item-name-rating'>
          <p>{ name }</p>
          <img src={assets.rating_starts} alt='rating' />
        </div>
        <p className='food-item-desc'>{ description }</p>
        <p className='food-item-price'>${ price }</p>
      </div>
    </div>
  )
}