import { food_list } from '../../assets/assets';
import { useGlobalContext } from '../../Context';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css'

export default function FoodDisplay() {

  
  
  const { foodList, category } = useGlobalContext();
  return (
    <div>
      <h2 className='text-black mt-5'>Top dishes near you</h2>
      <div className='food-display-list'>
        {foodList.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem key={item._id} {...item} />
            ) 
          }
        })}
      </div>
    </div>
  )
}