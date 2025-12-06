import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  //Evalua que el valor inicial del contador sea 5
  test("should initialize with default value of 5", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(5);
  });

  // Evalua que se le pueda pasar un valor inicial
  test("should initialize with with value 20", () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  //Evalua que se pueda incrementar el contador
  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(6);
  });

  //Evalua que se pueda descrementar el contador
  test("should decrement counter when handleSubstract is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSusbtract();
    });

    expect(result.current.counter).toBe(4);
  });

  //Evalua que se pueda resetear a 5 el contador
  test("should reset counter when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(5);
  });
});
