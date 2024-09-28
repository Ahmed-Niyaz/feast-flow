import { useEffect, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import axios from 'axios'
// import { food_list } from "./assets/assets";

const AppContext = createContext(null);
const url = 'http://localhost:3000'

export default function AppProvider({ children }) {
  
  const [category, setCategory] = useState('All');
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState('');
  const [foodList, setFoodList] = useState([]);
  
  const addToCart = async (itemId) => {
    // if (!cartItems[itemId]) {
    //   setCartItems((prev) => ({...prev, [itemId]:1}))
    // } else {
    //   setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    // }
    setCartItems((prev) => ({
          ...prev,
          [itemId]: (prev[itemId] || 0) + 1,
        }));

        if (token) {
          await axios.post(url + '/api/cart/add', {itemId}, {headers: {token}})
        }

  }
  
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1})); 
    if (token) {
      await axios.post(url + '/api/cart/remove', {itemId}, {headers: {token}})
    }
  }
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item_id in cartItems) {
      if (cartItems[item_id] > 0) {
        let itemInfo = foodList.find(product => product._id === item_id);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item_id];
        }
      }
    } 
    return totalAmount;
  }

  const loadCartData = async (token) => {
    const response = await axios.post(url + '/api/cart/get',{}, {headers: {token}});
    setCartItems(response.data.cartData);
  }

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + '/api/food/list');
      if (response.data.success) {
        setFoodList(response.data.data);
      } else {
        console.log('error fetching food list');
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  const values = {
    category,
    setCategory,
    foodList,
    setFoodList,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        await loadCartData(localStorage.getItem('token'))
      }
    }

    loadData();
  }, [])
  
  return (
    <AppContext.Provider value={values}>
      { children }
    </AppContext.Provider>
  )
} 

function useGlobalContext() {
  return useContext(AppContext);
}

export { useGlobalContext };
