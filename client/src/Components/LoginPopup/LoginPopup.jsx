import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useGlobalContext } from '../../Context';
import axios from 'axios';
import { toast } from 'react-toastify'

export default function LoginPopup({ setShowLogin }) {
  
  const { url, token, setToken } = useGlobalContext();
  
  const [currState, setCurrState] = useState('Login');
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  
  function onChangeHandler(e) {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  async function onLogin(e) {
    e.preventDefault();
    
    let newURl = url;
    
    if (currState === "Login") {
      newURl += '/api/user/login'; 
    } else {
      newURl += '/api/user/register'
    }
    
    try {
      const response = await axios.post(newURl, data);
      
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        toast.error('failed to create account')
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }    
    
  }
  
  
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2 className='text-2xl'>{ currState }</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='cross-icon' />
        </div>
        <div className='login-popup-inputs text-white'>
          { currState === 'Sign Up' && <input name='name' type='text' onChange={onChangeHandler} value={data.name} placeholder='Your name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' required />
        </div>
        <button className='text-5xl' type='submit'>{ currState === 'Sign Up' ? 'Create account' : 'Login' }</button>
        { currState === 'Sign Up' ? 
          <>
          <div className='login-popup-condition select-none'>
            <input id='privacy-policy' type='checkbox' required className='checkbox checkbox-sm checkbox-success' />
            <label htmlFor='privacy-policy'><p>By continuing, I agree to the terms of use & privacy policy.</p></label>
          </div>
          <p className='select-none'>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p> 
          </>
        :
          <p className='select-none'>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
        }
      </form>
    </div>
  )
}