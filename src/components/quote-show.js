const QuoteContainer = (props) =>{
    return (
        <div className="container" id="quote-box">
        <h2 className="quote" style={{color: `${props.color}`}}>
          <i className="fas fa-quote-left"></i>
          <span id="text">{props.quote}</span>
        </h2>
        <div className="author" style={{color: `${props.color}`}}>
          <p id="author">{props.author}</p>
        </div>
        <div className="buttons">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" className="btn" style={{backgroundColor: `${props.color}`}}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="www.tumblr.com/" target="_blank" className="btn" style={{backgroundColor: `${props.color}`}}>
            <i className="fab fa-tumblr"></i>
          </a>
          <button type="button" id="new-quote" onClick={props.click} style={{backgroundColor: `${props.color}`}}>
            Next Quote
          </button>
        </div>
      </div>
    )
}

export default QuoteContainer;