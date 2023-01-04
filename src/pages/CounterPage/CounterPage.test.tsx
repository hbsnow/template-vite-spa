import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";

import { TestingContainer } from "@/tests/utils/TestingContainer";

afterEach(() => {
  cleanup();
});

describe("CounterPage component", () => {
  it("should view `/counter`", async () => {
    render(
      <TestingContainer routerOptions={{ initialEntries: ["/counter"] }} />
    );

    expect(
      await screen.findByRole("heading", { name: "Count" })
    ).toBeInTheDocument();
  });
});
