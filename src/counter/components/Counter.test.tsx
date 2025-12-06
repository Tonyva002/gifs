import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  //Evalua que se renderice el componente con sus vistas
  test("should render the component", () => {
    render(<Counter />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `Counter: 5`
    );

    expect(screen.getByRole("button", { name: "-" })).toBeDefined();
    expect(screen.getByRole("button", { name: "+" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  //Evalua que al pulsar el boton descrementar, disminuya el valor del contador,
  test("should decrement the counter", () => {
    render(<Counter />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "-" });

    fireEvent.click(button);

    expect(labelH1.innerHTML).toContain("Counter: 4");
  });

  //Evalua que al pulsar el boton de incrementar, se incremente el valor del contador,
  test("should increment the counter", () => {
    render(<Counter />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "+" });

    fireEvent.click(button);

    expect(labelH1.innerHTML).toContain("Counter: 6");
  });

  //Evalua que al pulsar el boton de resetear, se resete el valor del contador a 5,
  test("should reset the counter", () => {
    render(<Counter />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(button);

    expect(labelH1.innerHTML).toContain("Counter: 5");
  });
});
