import logoFull from '../../assets/header/icons/logo-full.svg'
import userIcon from '../../assets/header/icons/icon-profile.svg'
import searchIcon from '../../assets/header/icons/search.svg'
import favoriteIcon from '../../assets/header/icons/favourite.svg'
import shoppingCartIcon from '../../assets/header/icons/buy.svg'
import { ImCancelCircle } from 'react-icons/im'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useRef, useState } from 'react'

export default function Header() {
  const hamburgerMenu: any = useRef(null)
  const [action, setAction] = useState(false)

  const toggleMenu = () => {
    if (hamburgerMenu.current) {
      hamburgerMenu.current.classList.toggle('active-menu')
    }
    setAction(!action)
  }

  return (
    <div className='header'>
      <div>
        <img src={logoFull} alt='' />
      </div>
      <div className='hamburger-menu cur-pointer' onClick={toggleMenu}>
        {action ? <ImCancelCircle size={25} /> : <RxHamburgerMenu size={25} />}
      </div>
      <div className='header-content' ref={hamburgerMenu}>
        <div className='menu'>
          <div className='font-500 cur-pointer transform'>Home</div>
          <div className='font-500 cur-pointer transform'>Shop</div>
          <div className='font-500 cur-pointer transform'>About</div>
          <div className='font-500 cur-pointer transform'>Contact</div>
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
