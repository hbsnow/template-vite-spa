import { lazy } from "react";

import { RouteObject } from "react-router-dom";

import { RootLayout } from "@/layouts/RootLayout";
import { loader as usersPageLoader } from "@/pages/UsersPage";

const HomePage = lazy(() => import("@/pages/HomePage"));
const UsersPage = lazy(() => import("@/pages/UsersPage"));
const CounterPage = lazy(() => import("@/pages/CounterPage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
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
    ],
  },
  {
    path: "*",
    element: <>404</>,
  },
];
