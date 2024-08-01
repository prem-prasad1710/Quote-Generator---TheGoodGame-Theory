import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={saveQuote}>Save Quote</button>
    </div>
  );
};

export default QuoteCard;