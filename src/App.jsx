import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./components/Quote";
import { Spinner } from "./components/Spinner";

const initialQuote = {
  text: "Aqui va la frase",
  author: "Saul Goodman",
};

function App() {
  const [quote, setQuote] = useState(initialQuote);

  const [loading, setLoading] = useState(false);

  const updateQuote = async () => {
    setLoading(true);
    const url = 'https://bettercallsaul-api.onrender.com/quotes/random'
    const res = await fetch(url);
    const data = await res.json();

    const {quote: text, author  } = data;

    setQuote({
      text,
      author
    })
    setLoading(false)
  }

  useEffect(() => {
   updateQuote();
  }, [])
  

  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/8a/Better_Call_Saul_logo.svg"
        alt="logo"
        className="img"
      />
      
      <br />
      <button onClick={() => updateQuote()} > Get Another </button>
      <div>
        { loading ? <Spinner /> : <Quote quote={quote}/> }
      </div>
      
    
      
    </div>
  );
}

export default App;
