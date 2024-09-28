import AppDownload from '../../Components/AppDownload/AppDownload'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Header from '../../Components/Header/Header'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <ExploreMenu />
      <FoodDisplay />
      <AppDownload />
    </div> 
  )
}