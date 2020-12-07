import React from 'react'

const QuoteCard = ({ date, quoteId, message, tags}) =>
  <div key={quoteId} className="QuoteCard">
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

export default QuoteCard