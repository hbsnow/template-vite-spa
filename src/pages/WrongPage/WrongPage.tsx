import { FC, useState } from "react";

import { Link } from "react-router-dom";

import { Button } from "@/cores/Button";

const ErrorComponent = () => {
  throw new Error("something went wrong");
};

export const WrongPage: FC = () => {
  const [mounted, setMounted] = useState(false);

  return (
    <main>
      <nav>
        <Link to="/">戻る</Link>
      </nav>
      <section>
        <h2>Wrong</h2>

        {mounted && <ErrorComponent />}

        <Button onClick={() => setMounted((prev) => !prev)}>
          throw new Error
        </Button>
      </section>
    </main>
  );
};
