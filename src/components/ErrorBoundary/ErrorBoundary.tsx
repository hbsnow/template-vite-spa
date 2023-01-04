import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "@/cores/Button";

export const ErrorBoundary: FC = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section>
        <h2>Error</h2>

        <Button onClick={() => navigate(0)}>Refresh</Button>
      </section>
    </main>
  );
};
