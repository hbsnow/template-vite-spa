import { FC, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";

export const App: FC = () => {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback="loading">
      <RouterProvider
        router={router}
        fallbackElement={<>fallbackElement Loading</>}
      />
    </Suspense>
  );
};
