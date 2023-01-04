import { cleanup, render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import { describe, it, expect, afterEach, vi, Mock } from "vitest";

import { RootLayout } from "./RootLayout";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigation: vi.fn().mockReturnValue({
      formAction: undefined,
      formData: undefined,
      formEncType: undefined,
      formMethod: undefined,
      location: undefined,
      state: "idle",
    }),
  };
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const router = createMemoryRouter([
  {
    path: "*",
    element: <RootLayout />,
    children: [
      { index: true, element: <div data-testid="children">children</div> },
    ],
  },
]);

describe("RootLayout", () => {
  it("should view heading", () => {
    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole("heading", { name: "Template Vite SPA" })
    ).toBeInTheDocument();
  });

  it("should view children if not loading", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByTestId("children")).toBeInTheDocument();
  });

  it("should view children if loading", () => {
    (
      useNavigation as Mock<unknown[], ReturnType<typeof useNavigation>>
    ).mockReturnValue({
      formAction: undefined,
      formData: undefined,
      formEncType: undefined,
      formMethod: undefined,
      state: "loading",
      location: {
        pathname: "/dummy",
        search: "",
        hash: "",
        state: null,
        key: "dummy",
      },
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
