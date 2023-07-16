import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./components/Quote";
import { Spinner } from "./components/Spinner";

import Error from "./pages/Error";

// const initialQuote = {
//   text: "Aqui va la frase",
//   author: "Saul Goodman",
// };

function App() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateQuote = async () => {
    setLoading(true);
    const url = "https://bettercallsaul-api.onrender.com/api/quotes";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
 
    if (Array.isArray(data) && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const { quote, author } = data[randomIndex];
      console.log(quote, author);

    setQuote({
      quote,
      author,
    });
    }
    setLoading(false);
  };

  useEffect(() => {
    updateQuote();
  }, []);


  console.log(quote);

  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/8a/Better_Call_Saul_logo.svg"
        alt="logo"
        className="img"
      />

      <br />
      <button onClick={() => updateQuote()}> Get Another </button>
      <div>{loading ? <Spinner /> : <Quote quote={quote} />}</div>
    </div>
  );
}

export default App;
