import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate, } from 'react-router-dom'
import { useGlobalContext } from '../../Context';

export default function Navbar({ setShowLogin }) {
  
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useGlobalContext();

  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  }

  return (
    <div className='navbar pt-10'>
      {/* <Link to='/'><img src={assets.logo} alt='logo' className='logo'/></Link> */}
      <Link to='/'><h1>Feast Flow</h1></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : null} >home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : null} >menu</a>
        {/* <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : null} >mobile-app</a> */}
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : null} >contact us</a>
      </ul>
      <div className='navbar-right'>
        {/* <img src={assets.search_icon} alt='search-icon' /> */}
        <div className='navbar-search-icon'>
          <Link to='/cart' ><img src={assets.basket_icon} alt='basket-icon'/></Link>
          {getTotalCartAmount() !== 0 && <div className='dot'></div>}
        </div>
        {!token ?
          <button onClick={() => setShowLogin(prev => !prev)}>sign in</button>
          :
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt=""/>
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}