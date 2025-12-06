import { useState } from "react";

export const useCounter = (initialValue: number = 5) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSusbtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };
  return {
    // Values
    counter,

    // Methods  / Actions
    handleAdd,
    handleSusbtract,
    handleReset,
  };
};
