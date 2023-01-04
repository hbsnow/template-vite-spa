import { lazy } from "react";

import { RouteObject } from "react-router-dom";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { RootLayout } from "@/layouts/RootLayout";
import { loader as usersPageLoader } from "@/pages/UsersPage";

const HomePage = lazy(() => import("@/pages/HomePage"));
const UsersPage = lazy(() => import("@/pages/UsersPage"));
const CounterPage = lazy(() => import("@/pages/CounterPage"));
const WrongPage = lazy(() => import("@/pages/WrongPage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/users",
            element: <UsersPage />,
            loader: usersPageLoader,
          },
          { path: "/counter", element: <CounterPage /> },
          { path: "/wrong", element: <WrongPage /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <>404</>,
  },
];
