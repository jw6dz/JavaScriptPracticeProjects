import React, { useRef, useState }from 'react'
import Draggable from 'react-draggable'

const QuoteCard = ({ date, getNextQuote, getPreviousQuote, quoteId, message, tags}) => {
  const [x, setX] = useState(0)
  const quoteCardRef = useRef(null)

  const resetPos = (e, data) => {
    if (data.x > 50) getPreviousQuote()
    else if (data.x < -50) { 
      getNextQuote() // TO-DO: fix bug where this changes current QuoteCard object when called from here
    }
    setX(0)
  }

  return (
    <Draggable 
      axis="x"
      defaultPosition={{x: 0, y: 0}}
      nodeRef={quoteCardRef}
      onStop={(e, data) => resetPos(e, data)}
      position={{x, y: 0}}
    >
      <div key={quoteId} className="QuoteCard" ref={quoteCardRef}>
        <div className="QuoteCard__Message">
          <span className="QuoteCard__QuotationMark">"</span> {message} <span className="QuoteCard__QuotationMark">"</span>
        </div>
        <div>
          
        </div>
        <div className="QuoteCard__Meta">
          {!!date && <div>Words Uttered On: {date}</div>}
          {tags.length > 0 && <div>Tags: {tags.join(', ')}</div>}
        </div>
      </div>
    </Draggable>
  )
}

export default QuoteCard