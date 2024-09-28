import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { useGlobalContext } from '../../Context'

export default function ExploreMenu() {
  
  const { category, setCategory } = useGlobalContext();
  
  return (
    <div className='explore-menu pt-5' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} key={index} className='explore-menu-list-item flex flex-col justify-center items-center'>
              <img className={category === item.menu_name ? 'active' : null} src={item.menu_image} alt='menu-img'/>
              <p>{ item.menu_name }</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}
