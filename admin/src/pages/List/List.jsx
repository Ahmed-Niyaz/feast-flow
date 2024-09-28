import { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';
  

const List = ({ url }) => {
  
  const [list, setList] = useState([]);
  
  async function fetchFoodList() {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      console.log('fetching succeeded');
      setList(response.data.data);
    } else {
      console.log('fetching failed');
      toast.error('Error fetching food list')
    }
  }
  
  useEffect(() => {
    console.log(list);
  }, [list])
  
  async function removeFood(id) {
    const response = await axios.post(`${url}/api/food/remove`, {id: id});
    if (response.data.success) {
      console.log('food removed successful');
      await fetchFoodList();
      toast.success('cleared')
    } else {
      toast.error('Failed')
    }
  }
  
  useEffect(() => {
    fetchFoodList();
  }, [])
  
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item) => {
          const {_id: id, name, price, category, image} = item;
          return (
            <div key={id} className="list-table-format text-md">
              <img src={`${url}/images/`+image} alt="food-image" />
              <p>{name}</p>
              <p>{category}</p>
              <p>{price}</p>
              <p onClick={() => removeFood(id)} className='cursor'>x</p>
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default List