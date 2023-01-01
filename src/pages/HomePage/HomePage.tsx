import { FC } from "react";

import { Link } from "react-router-dom";

export const HomePage: FC = () => {
  return (
    <main>
      <section>
        <h2>Menu</h2>

        <ul>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
        </ul>
      </section>
    </main>
  );
};
