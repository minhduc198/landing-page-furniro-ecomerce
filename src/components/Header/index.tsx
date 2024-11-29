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
          <div className='font-500'>Home</div>
          <div className='font-500'>Shop</div>
          <div className='font-500'>About</div>
          <div className='font-500'>Contact</div>
        </div>
        <div className='header-action'>
          <div>
            <img src={userIcon} alt='' />
          </div>
          <div>
            <img src={searchIcon} alt='' />
          </div>
          <div>
            <img src={favoriteIcon} alt='' />
          </div>
          <div>
            <img src={shoppingCartIcon} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
