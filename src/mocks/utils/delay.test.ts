import { context } from "msw";
import {
  describe,
  vi,
  afterEach,
  beforeEach,
  it,
  expect,
  Mocked,
} from "vitest";

import { delay } from "./delay";

vi.mock("msw", async () => {
  const actual = await vi.importActual<typeof import("msw")>("msw");
  return {
    ...actual,
    context: { delay: vi.fn() },
  };
});

const originalViteEnvMode = import.meta.env.MODE;

beforeEach(() => {
  import.meta.env.MODE = originalViteEnvMode;
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("delay", () => {
  it("should be used 0 set to the argument when development", () => {
    import.meta.env.MODE = "development";
    const delayMock = (context as Mocked<typeof context>).delay;

    delay(100);

    expect(delayMock.mock.calls.length).toBe(1);
    expect(delayMock.mock.calls[0][0]).toBe(100);
  });

  it("should be used undefined set to the argument when development", () => {
    import.meta.env.MODE = "development";
    const delayMock = (context as Mocked<typeof context>).delay;

    delay();

    expect(delayMock.mock.calls.length).toBe(1);
    expect(delayMock.mock.calls[0][0]).toBeUndefined();
  });

  it("should use 0 when test", () => {
    const delayMock = (context as Mocked<typeof context>).delay;

    delay(100);

    expect(delayMock.mock.calls.length).toBe(1);
    expect(delayMock.mock.calls[0][0]).toBe(0);
  });
});
