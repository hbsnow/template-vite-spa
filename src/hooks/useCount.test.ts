import { act, renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { useCount } from "./useCount";

describe("useCount", () => {
  it("should be initial value", () => {
    const { result } = renderHook(() => useCount(0));

    expect(result.current[0]).toBe(0);
  });

  it("should increase by 1 when countUp", () => {
    const { result } = renderHook(() => useCount(0));

    act(() => {
      result.current[1].countUp();
    });

    expect(result.current[0]).toBe(1);
  });

  it("should decrease by 1 when countUp", () => {
    const { result } = renderHook(() => useCount(0));

    act(() => {
      result.current[1].countDown();
    });

    expect(result.current[0]).toBe(-1);
  });
});
