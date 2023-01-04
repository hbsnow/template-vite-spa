import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { describe, it, expect, afterEach, vi, Mock } from "vitest";

import { ErrorBoundary } from "./ErrorBoundary";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: vi.fn().mockReturnValue(vi.fn()),
  };
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const router = createMemoryRouter([
  {
    path: "*",
    element: <ErrorBoundary />,
  },
]);

describe("ErrorBoundary Component", () => {
  it("render the container", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should refresh if click button", () => {
    const navigateMock = useNavigate() as Mock<
      unknown[],
      ReturnType<typeof useNavigate>
    >;

    render(<RouterProvider router={router} />);

    expect(navigateMock.mock.calls.length).toBe(0);

    fireEvent.click(screen.getByRole("button"));

    expect(navigateMock.mock.calls.length).toBe(1);
  });
});
