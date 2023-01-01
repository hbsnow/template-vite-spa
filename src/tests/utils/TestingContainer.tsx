import { FC, StrictMode, Suspense } from "react";

import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { routes } from "@/routes";

type Props = {
  routerOptions: Parameters<typeof createMemoryRouter>[1];
};

export const TestingContainer: FC<Props> = (props) => {
  const { routerOptions } = props;

  const router = createMemoryRouter(routes, routerOptions);

  return (
    <StrictMode>
      <Suspense fallback="loading">
        <RouterProvider
          router={router}
          fallbackElement={<>fallbackElement Loading</>}
        />
      </Suspense>
    </StrictMode>
  );
};
