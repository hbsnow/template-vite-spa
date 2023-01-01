import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, it, expect } from "vitest";

import { handlers } from "@/mocks/handlers";
import { TestingContainer } from "@/tests/utils/TestingContainer";

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("HomePage", () => {
  it("should view `/`", async () => {
    render(<TestingContainer routerOptions={{ initialEntries: ["/"] }} />);

    expect(
      await screen.findByRole("heading", { name: "Menu" })
    ).toBeInTheDocument();
  });
});
