import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";

import { Button } from ".";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  it("render the container", () => {
    render(<Button>button</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
