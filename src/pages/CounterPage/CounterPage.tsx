import { FC } from "react";

import { Link } from "react-router-dom";

import { Button } from "@/components/Button";
import { useCount } from "@/hooks/useCount";

export const CounterPage: FC = () => {
  const [count, { countUp, countDown }] = useCount();

  return (
    <div>
      <nav>
        <Link to="/">戻る</Link>
      </nav>
      <section>
        <h2>Count</h2>
        <p>count is: {count}</p>
        <p>
          <Button onClick={() => countUp()}>count up</Button>
          <Button onClick={() => countDown()}>count down</Button>
        </p>
      </section>
    </div>
  );
};
