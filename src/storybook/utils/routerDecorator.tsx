import type { Decorator } from "@storybook/react";
import {
  createMemoryRouter,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";

export const routerDecorator: (loader?: LoaderFunction) => Decorator = (
  loader
) => {
  const decorator: Decorator = (Story) => {
    return (
      <RouterProvider
        router={createMemoryRouter([{ path: "*", element: Story(), loader }])}
      />
    );
  };

  return decorator;
};
