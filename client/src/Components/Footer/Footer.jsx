import { assets } from '../../assets/assets'
import './Footer.css'

export default function Footer() {
  return (
    <div className='foot absolute' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          {/* <img src={assets.logo} alt='logo' /> */}
          <h1>Feast Flow</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className='footer-social-icons flex justify-center items-center'>
            <img src={assets.facebook_icon} alt='social-icon'/>
            <img src={assets.twitter_icon} alt='social-icon'/>
            <img src={assets.linkedin_icon} alt='social-icon'/>
          </div>
        </div>
        
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get in touch</h2>
          <ul>
            <li>+1-123-4567-890</li>
            <li>contact@FeastFlow.com</li>
          </ul>
        </div>
      </div>
      <hr className='bg-[grey] w-full my-20px h-[2px] border-none'/>
      <p className='footer-copyright'>Copyright 2024 © Feast-Flow.com - All Right Reserved</p>
    </div>
  )
}
