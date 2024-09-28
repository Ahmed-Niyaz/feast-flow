import { assets } from '../../assets/assets'
import './AppDownload.css'

export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Downloads <br/> Feast Flow App</p>
      <div className='app-download-platforms'>
        <img src={assets.app_store} alt='appstore' />
        <img src={assets.play_store} alt='playstore' />
      </div>
    </div>
  )
}