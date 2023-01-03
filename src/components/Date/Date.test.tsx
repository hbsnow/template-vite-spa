import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { DatePresenter } from "./Date";

describe("Date Component", () => {
  it("render the container", () => {
    render(<DatePresenter date="2023-01-03T06:53:40.944Z" />);

    const target = screen.getByText("2023-01-03T06:53:40.944Z");

    expect(target).toBeInTheDocument();
  });
});
