import React, { useState, useEffect } from 'react';
import axios from 'axios';
import confetti from 'canvas-confetti';
import QuoteCard from './QuoteCard';
import './RandomQuote.css';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [quoteKey, setQuoteKey] = useState(0);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
      setQuoteKey(prevKey => prevKey + 1); // Update key to trigger animation
      triggerConfetti();
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
    triggerConfetti();
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="random-quote">
      <QuoteCard key={quoteKey} quote={quote} saveQuote={saveQuote} />
      <div className="button-container">
        <button onClick={fetchQuote}>Get New Quote</button>
      </div>
      <div className="saved-quotes">
        <h2>Saved Quotes</h2>
        {savedQuotes.map((q, index) => (
          <QuoteCard key={index} quote={q} />
        ))}
      </div>
    </div>
  );
};

export default RandomQuote;