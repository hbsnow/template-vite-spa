import matchers from "@testing-library/jest-dom/matchers";
import { fetch } from "cross-fetch";
import { expect } from "vitest";

expect.extend(matchers);

// Cannot mock msw in vitest without polyfill.
global.fetch = fetch;
