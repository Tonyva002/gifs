import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Counter } from "./Counter";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: "10",
    handleAdd: handleAddMock,
    handleSusbtract: handleSubtractMock,
    handleReset: handleResetMock,
  }),
}));

describe("Counter", () => {
  //Evalua que se renderice el componente con sus vista
  test("should render the component", () => {
    render(<Counter />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `Counter: 10`
    );

    expect(screen.getByRole("button", { name: "-" })).toBeDefined();
    expect(screen.getByRole("button", { name: "+" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  //Evalua que se ejecute el boton disminuir
  test("should call handleSusbtract if button is clicked", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: "-" });

    fireEvent.click(button);

    expect(handleSubtractMock).toHaveBeenCalled();
    expect(handleAddMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });

  //Evalua que se ejecute el boton de agregar
  test("should call handleAdd if button is clicked", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: "+" });

    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled();
  });

  //Evalua que se ejecute el boton resetear
  test("should call handleReset if button is clicked", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(button);

    expect(handleResetMock).toHaveBeenCalled();
  });
});
