import React from 'react'
import CloseHamburger from './CloseHamburger.jsx'
import logo from '../../utils/images/logo.png'
import '../../utils/css/Header.css'

const Header = () => {
  
  return (
    <div className='header'>
      <CloseHamburger />

      <img src={logo} alt='Logo' className='logo' />
    </div>
  )
}

export default Header
