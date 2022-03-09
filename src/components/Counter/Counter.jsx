import { useState } from 'react';
import "./Counter.scss"

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };


  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter-container">
      <h3 className="counter-container__heading">Counter</h3>
      <div className="counter-container__content">
      <button onClick={handleDecrement}>-</button>
      <p className="counter-container__counter">{counter}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
    </div>
  );
};

export default Counter;