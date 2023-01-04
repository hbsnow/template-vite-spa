---
to: src/pages/<%= h.changeCase.pascalCase(name) %>Page/<%= h.changeCase.pascalCase(name) %>Page.test.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

import { TestingContainer } from "@/tests/utils/TestingContainer";

afterEach(() => {
  cleanup();
});

describe("<%= Name %>Page component", () => {
  it("should view `/<%= name %>`", async () => {
    render(<TestingContainer routerOptions={{ initialEntries: ["/<%= name %>"] }} />);

    expect(
      await screen.findByText("example")
    ).toBeInTheDocument();
  });
});
