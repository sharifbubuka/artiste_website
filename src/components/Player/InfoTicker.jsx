import React from 'react'
import Ticker from 'react-ticker'

const InfoTicker = () => {
  return (
    <Ticker>
      {({ index }) => (
            <>
              <p>This is the Headline of element!</p>
            </>
        )}
    </Ticker>
  )
}

export default InfoTicker