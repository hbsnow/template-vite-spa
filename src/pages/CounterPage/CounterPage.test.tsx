import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { TestingContainer } from "@/tests/utils/TestingContainer";

describe("CounterPage", () => {
  it("should view `/counter`", async () => {
    render(
      <TestingContainer routerOptions={{ initialEntries: ["/counter"] }} />
    );

    expect(
      await screen.findByRole("heading", { name: "Count" })
    ).toBeInTheDocument();
  });
});
