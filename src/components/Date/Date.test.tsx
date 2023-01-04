import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";

import { DatePresenter } from "./Date";

afterEach(() => {
  cleanup();
});

describe("Date component", () => {
  it("render the container", () => {
    render(<DatePresenter date="2023-01-03T06:53:40.944Z" />);

    expect(screen.getByText("2023-01-03T06:53:40.944Z")).toBeInTheDocument();
  });
});
