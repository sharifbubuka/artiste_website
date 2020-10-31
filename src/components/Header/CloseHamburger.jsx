import React, { useState } from 'react'
import applemusic from '../../utils/images/applemusic.svg'
import youtube from '../../utils/images/youtube.svg'
import spotify from '../../utils/images/spotify.svg'
import soundcloud from '../../utils/images/soundcloud.svg'
import audiomack from '../../utils/images/audiomack.svg'
import '../../utils/css/CloseHamburger.css'

const CloseHamburger = () => {
  const [ hamburgerClassName, setHamburgerClassName ] = useState('menu-btn')
  const [ navClassName, setNavClassName ] = useState('')

  function handleHamburgerClick() {
    if (hamburgerClassName === 'menu-btn') {
      setHamburgerClassName('menu-btn open')
      setNavClassName('open')
    } else if (hamburgerClassName === 'menu-btn open') {
      setHamburgerClassName('menu-btn')
      setNavClassName('')
    }
  }

  
  return (
    <div className='container'>
      <div className={hamburgerClassName} onClick={handleHamburgerClick}>
        <div className='menu-btn__burger'></div>
      </div>

      <nav className={navClassName}>
        <ul className='mainnav__items'>
          <li>
            <a href="sharif.com">
              Dextar
            </a>
          </li>
          <li>
            <a href="sharif.com">
              Music
            </a>
          </li>
          <li>
            <a href="sharif.com">
              Shop
            </a>
          </li>
          <li>
            <a href="sharif.com">
              Press
            </a>
          </li>
        </ul>

        <ul className='socialmedia__items'>
          <li>
            <a href="sharif.com">
              <img src={applemusic} alt="Apple Music logo"/>
            </a>
          </li>
          <li>
            <a href="sharif.com">
              <img src={youtube} alt="YouTube logo"/>
            </a>
          </li>
          <li>
            <a href="sharif.com">
              <img src={spotify} alt="Spotify logo"/>
            </a>
          </li>
          <li>
            <a href="sharif.com">
              <img src={soundcloud} alt="Soundcloud logo"/>
            </a>
          </li>
          <li>
            <a href="sharif.com">
              <img src={audiomack} alt="Audiomack logo"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default CloseHamburger
