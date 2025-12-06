import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { counter, handleAdd, handleSusbtract, handleReset } = useCounter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter: {counter}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleSusbtract}>-</button>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
