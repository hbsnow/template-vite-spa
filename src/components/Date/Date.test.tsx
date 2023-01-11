import { cleanup, render, screen } from "@testing-library/react";
import { Await } from "react-router-dom";
import { describe, it, expect, afterEach } from "vitest";

import { Date } from "./Date";

afterEach(() => {
  cleanup();
});

describe("Date component", () => {
  it("render the container", async () => {
    const dateMock = new Promise((resolve) => {
      resolve({ date: "2023-01-03T06:53:40.944Z" });
    });

    render(
      <Await resolve={dateMock}>
        <Date />
      </Await>
    );

    expect(
      await screen.findByText("2023-01-03T06:53:40.944Z")
    ).toBeInTheDocument();
  });
});
