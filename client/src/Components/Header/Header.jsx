import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Grab a bite!</h2>
        <p>Choose from a diverse menu crafted with the finest ingredients and culinary expertise to satisfy your cravings and elevate your dining experience.</p>
        <button className='btn border-none text-white hover:bg-[red] hover:bg-opacity-40'><a href='#explore-menu'>View Menu</a></button>
      </div>
    </div>
  )
}