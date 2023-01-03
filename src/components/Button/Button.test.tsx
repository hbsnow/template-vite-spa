import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Button } from ".";

describe("Button Component", () => {
  it("render the container", () => {
    render(<Button>button</Button>);

    const target = screen.getByRole("button");

    expect(target).toBeInTheDocument();
  });
});
