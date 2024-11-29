import logoFull from '../../assets/header/icons/logo-full.svg'
import userIcon from '../../assets/header/icons/icon-profile.svg'
import searchIcon from '../../assets/header/icons/search.svg'
import favoriteIcon from '../../assets/header/icons/favourite.svg'
import shoppingCartIcon from '../../assets/header/icons/buy.svg'

export default function Header() {
  return (
    <div className='header'>
      <div>
        <img src={logoFull} alt='' />
      </div>
      <div className='header-content'>
        <div className='menu'>
          <div className='font-500 cur-pointer'>Home</div>
          <div className='font-500 cur-pointer'>Shop</div>
          <div className='font-500 cur-pointer'>About</div>
          <div className='font-500 cur-pointer'>Contact</div>
        </div>
        <div className='header-action'>
          <div>
            <img className='cur-pointer' src={userIcon} alt='' />
          </div>
          <div>
            <img className='cur-pointer' src={searchIcon} alt='' />
          </div>
          <div>
            <img className='cur-pointer' src={favoriteIcon} alt='' />
          </div>
          <div>
            <img className='cur-pointer' src={shoppingCartIcon} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
