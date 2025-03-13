import { useState } from "react";
import "./App.css";


const natoAlphabet = { 
  A: "ALPHA", B: "BRAVO", C: "CHARLIE", D: "DELTA", E: "ECHO",
  F: "FOXTROT", G: "GOLF", H: "HOTEL", I: "INDIA", J: "JULIET",
  K: "KILO", L: "LIMA", M: "MIKE", N: "NOVEMBER", O: "OSCAR",
  P: "PAPA", Q: "QUEBEC", R: "ROMEO", S: "SIERRA", T: "TANGO",
  U: "UNIFORM", V: "VICTOR", W: "WHISKEY", X: "X-RAY", Y: "YANKEE", Z: "ZULU"
};

function App() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    const text = e.target.value.toUpperCase();
    setInput(text);
    setResult(text.split("").map(char => natoAlphabet[char] || char));
  };
  return (
    <div className="container">
      <h1 className="header">NATO PHONETIC ALPHABET</h1>
      <h3>Convert Text to <a href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">nato phonetic alphabet</a></h3>
      <input type="text" value={input} onChange={handleChange} />
      <div className="result">
        {result.map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
    </div>
  );
}

export default App;
