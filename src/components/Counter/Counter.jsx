import { useState } from 'react';
import "./Counter.scss"
import plus from "../../assets/images/plus.png"
import minus from "../../assets/images/minus.png"

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter(counter - 1);
    
       if(counter<1){
      counter = 0;
    }

  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter-container">
      <h3 className="counter-container__heading">Tickets</h3>
      <div className="counter-container__content">
      <img src={minus}
        alt="minus"
        onClick={handleDecrement}
        className="counter-container__button"
      />
     
      <p className="counter-container__counter">{counter}</p>
      <img src={plus}
        alt="plus"
        onClick={handleIncrement}
        className="counter-container__button"
      />
    </div>
    </div>
  );
};

export default Counter;