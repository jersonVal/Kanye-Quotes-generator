import './App.css';
import React, { useState, useEffect } from 'react';
import QuoteContainer from './components/quote-show';

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('#00A19D');
  const colors = [
    "#00A19D",
    "#6F69AC",
    "#FFB344",
    "#E05D5D",
    "#80ED99",
    "#FF0000",
    "#86340A",
    "#7EB5A6"
  ]

  const getData = async () => {
    const url = "https://game-of-thrones-quotes.herokuapp.com/v1/random"

    const res = await fetch(url)
    const data = await res.json()
    
    setQuote(data.sentence)
    setAuthor(data.character.name)
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }

  useEffect(()=> {
    getData();
  },[])

  return (
    <div className="App" style={{backgroundColor: `${color}`}}>
      <QuoteContainer quote={quote} author={author} color={color} click={getData}/>
    </div>
  );
}

export default App;
