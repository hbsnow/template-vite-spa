import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { App } from "./App";

const enableMsw = import.meta.env.DEV && import.meta.env.VITE_MSW === "true";

const main = async () => {
  if (enableMsw) {
    const { setupWorker } = await import("msw");
    const { handlers } = await import("./mocks/handlers");

    const worker = setupWorker(...handlers);
    await worker.start({ onUnhandledRequest: "bypass" });
  }

  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Failed to find the root element");
  }

  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

main();
