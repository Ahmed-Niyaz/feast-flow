import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <img className='logo' src={assets.logo} alt='logo' /> */}
        <h1>Feast Flow</h1>
        <img className='profile' src={assets.profile} alt='logo' />
    </div>
  )
}

export default Navbar