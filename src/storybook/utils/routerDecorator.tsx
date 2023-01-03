import type { Decorator } from "@storybook/react";
import {
  createMemoryRouter,
  NonIndexRouteObject,
  RouterProvider,
} from "react-router-dom";

type Route = Omit<NonIndexRouteObject, "path">;

export const routerDecorator: (route?: Route) => Decorator = (route) => {
  const decorator: Decorator = (Story) => {
    return (
      <RouterProvider
        router={createMemoryRouter([{ path: "*", element: Story(), ...route }])}
      />
    );
  };

  return decorator;
};
