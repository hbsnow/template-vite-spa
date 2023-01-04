import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

import { TestingContainer } from "@/tests/utils/TestingContainer";

afterEach(() => {
  cleanup();
});

describe("WrongPage component", () => {
  it("should view `/wrong`", async () => {
    render(<TestingContainer routerOptions={{ initialEntries: ["/wrong"] }} />);

    expect(
      await screen.findByRole("heading", { name: "Wrong" })
    ).toBeInTheDocument();
  });
});
