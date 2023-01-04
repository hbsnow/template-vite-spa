import { FC, Suspense } from "react";

import {
  Await,
  defer,
  Link,
  LoaderFunction,
  useLoaderData,
} from "react-router-dom";

import { client } from "@/api/client";
import { Date } from "@/components/Date/Date";
import { DateResponse } from "@/models/date";
import { UsersResponse } from "@/models/user";

type LoaderData = {
  users: UsersResponse;
  date: Promise<DateResponse>;
};

export const loader: LoaderFunction = async () => {
  const users = client.v1.users.$get();
  const date = client.v1.date.$get();

  return defer({
    users: await users,
    date,
  });
};

export const UsersPage: FC = () => {
  const { users, date } = useLoaderData() as LoaderData;

  return (
    <main>
      <nav>
        <Link to="/">戻る</Link>
      </nav>
      <section>
        <h2>Users</h2>

        <ul>
          {users.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        <Suspense fallback="loading">
          <Await resolve={date} errorElement={<>Error</>}>
            <Date />
          </Await>
        </Suspense>
      </section>
    </main>
  );
};
