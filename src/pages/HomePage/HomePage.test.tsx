import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

import { TestingContainer } from "@/tests/utils/TestingContainer";

afterEach(() => {
  cleanup();
});

describe("HomePage", () => {
  it("should view `/`", async () => {
    render(<TestingContainer routerOptions={{ initialEntries: ["/"] }} />);

    expect(
      await screen.findByRole("heading", { name: "Menu" })
    ).toBeInTheDocument();
  });
});
