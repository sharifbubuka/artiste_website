import React from 'react'
import InfoTicker from './InfoTicker.jsx'
import { IconButton, Button } from '@material-ui/core';
import { PlayCircleOutline, PauseCircleOutline } from '@material-ui/icons'
import { FastRewind, FastForward, ShoppingCart, MoreVert } from '@material-ui/icons'
import '../../utils/css/Player.css'

const Player = () => {
  let playing = true;
  return (
    <div className='player'>
      <div className='progress__section'>
        <span className='start-time'>00:21</span>
        <div className='progress-bar'>
          <div className='current-progress'>
            <div className='current-progress__outercircle'>
              <div className='current-progress__innercircle'></div>
            </div>
          </div>
        </div>
        <span className='end-time'>3:41</span>
      </div>

      <InfoTicker />

      <div className='control-panel__section'>
        <div className='song-details'>
          <img src='https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d3/09/5e/d3095eaa-1a53-72c6-1088-abe733a7d988/886448775256.jpg/200x200bb-60.jpg' alt='Song Cover' className='song-cover'/>
          <div>
           {/*<span className='artiste-name'>Dextar</span>
           <span className='song-name'>The One</span>*/}
          </div>
        </div>
        <div className='player-settings'>
          <IconButton>
            <FastRewind />
          </IconButton>
          {playing? <IconButton><PlayCircleOutline fontSize='large' /></IconButton> : <IconButton><PauseCircleOutline /></IconButton>}
          <IconButton>
            <FastForward />
          </IconButton>
        </div>
        <div className='services__section'>
          {/*<Button variant='contained' color='primary' size='small' startIcon={<ShoppingCart />}>Buy</Button>*/}
          <MoreVert />
        </div>
      </div>
    </div>
  )
}

export default Player




