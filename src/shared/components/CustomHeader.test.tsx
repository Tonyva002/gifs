import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Buscar gifs";

  test("Should render the title correctly", () => {
    render(<CustomHeader title={title} />);

    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(title)).not.toBeNull();
  });

  test("Should render the description hen provided", () => {
    const description = "Descubre y comparte gifs";
    render(<CustomHeader title={title} description={description} />);

    expect(screen.getByText(description)).toBeDefined();
  });

  test("Should not render the description when not provided", () => {
    const { container } = render(<CustomHeader title={title} />);

    const divElement = container.querySelector(".content-center");

    const h1 = divElement?.querySelector("h1");
    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector("p");
    expect(p).toBeNull();
  });
});
