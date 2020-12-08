import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { baseApiUrl } from './QuotesHome'
import QuoteCard from './QuoteCard'
import moment from 'moment'

const QuotesContainer = () => {
  const [quotes, setQuotes] = useState([])
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0)
  
  const nextQuoteAvailable = useMemo(() => activeQuoteIndex < quotes.length - 1, [quotes, activeQuoteIndex])
  const previousQuoteAvailable = useMemo(() => activeQuoteIndex > 0 && !!quotes, [quotes, activeQuoteIndex])
 
  const getNextQuote = () => {
    if (nextQuoteAvailable) setActiveQuoteIndex(activeQuoteIndex + 1)
    else {
      fetchRandomQuote()
    }
  }

  const getPreviousQuote = () => {
    if (previousQuoteAvailable) setActiveQuoteIndex(activeQuoteIndex - 1)
    else return null
  }

  const fetchRandomQuote = async () => {
    try {
      console.log('fetching random quote', quotes)
      const { data } = await axios.get(`${baseApiUrl}/random/quote`)
      setQuotes([...quotes, 
        <QuoteCard 
          date={moment(data.appeared_at).format("MMM Do, YYYY")} 
          getNextQuote={getNextQuote}
          getPreviousQuote={getPreviousQuote}
          quoteId={data.quote_id} 
          message={data.value} 
          tags={data.tags} />
        ])
    } catch (err) {
      console.log('Random Quote fetching failed b/c: ', err)
    }
  }

  useEffect(() => {
    console.log('quotes cahnged', quotes)
    setActiveQuoteIndex(quotes.length - 1)
  }, [quotes])

  // initial fetch
  useEffect(() => {
    fetchRandomQuote()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="Quote">
      <h4 className="Quote__Header">Donald Trump once said:</h4>
      {!!quotes && 
        <div className="Quote__Container">{quotes[activeQuoteIndex]}</div>
      }

      <div className="Quote__ControlButtons">
        <button className="Quote__Button" onClick={() => getPreviousQuote()} disabled={!previousQuoteAvailable}>
          Previous Nonsense
        </button>
        <button className="Quote__Button" onClick={() => setQuotes([])}>
          Clear Quotes
        </button>
        <button className="Quote__Button" onClick={() => getNextQuote()}>
          More Nonsense
        </button>
      </div>
    </div>
  )
}

export default QuotesContainer