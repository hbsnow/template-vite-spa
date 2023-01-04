import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";

import { server } from "@/tests/utils/server";
import { TestingContainer } from "@/tests/utils/TestingContainer";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("UsersPage component", () => {
  it("should view `/users`", async () => {
    render(<TestingContainer routerOptions={{ initialEntries: ["/users"] }} />);

    expect(
      await screen.findByRole("heading", { name: "Users" })
    ).toBeInTheDocument();
  });
});
