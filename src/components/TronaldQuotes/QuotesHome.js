import React from 'react'
import QuotesContainer from './QuotesContainer'
import emoji from './../../assets/trumpEmoji.png'
import './../../App.css';
import './Quotes.css'

export const baseApiUrl = 'https://tronalddump.io'

const QuotesHome = () => {
  return (
    <>
      <img className="Quote__Logo" src={emoji} alt='trumpEmoji' />
      <QuotesContainer/>
    </>
  )
}

export default QuotesHome