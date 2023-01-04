---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.test.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";

import { <%= Name %> } from "./<%= Name %>";

afterEach(() => {
  cleanup();
});

describe("<%= Name %> Component", () => {
  it("render the container", () => {
    render(<<%= Name %>>example</<%= Name %>>);

    expect(screen.getByText("example")).toBeInTheDocument();
  });
});
