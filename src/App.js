import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { gsap } from "gsap";

function App() {
  const ITEM_SIZE = 150;
  const [result, setResult] = useState(0);
  const numbersWrapper = useRef();
  const numbers = Array.from(new Array(100));
  const counterItems = numbers.map((itm, index) => ({ id: index })).reverse();

  const addResult = () => {
    const resultUpdated = result + Math.floor(Math.random() * 3) + 1;
    setResult(resultUpdated);
  };

  useEffect(() => {
    gsap.to(numbersWrapper.current, { y: ITEM_SIZE * result });
  }, [result]);

  return (
    <div className="App">
      <div className="main-container">
        <div className="main-container__holder">
          <div className="counter">
            <div ref={numbersWrapper} className="counter__numbers">
              {counterItems.map((itm, index) => (
                <div key={index}>
                  <span>{itm.id}</span>
                </div>
              ))}
            </div>
            <div className="counter__holder"></div>
          </div>
        </div>
        <div className="button-wrapper">
          <button type="button" onClick={addResult}>
            Add random number
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
