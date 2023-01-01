import { compose, context, ResponseTransformer, RestContext } from "msw";

/**
 * Set delay to 0 when testing
 *
 * @link https://github.com/mswjs/msw/discussions/935
 */
export const delay = (
  duration?: Parameters<RestContext["delay"]>[0]
): ResponseTransformer => {
  if (import.meta.env.MODE === "test") {
    return compose(context.delay());
  }

  return compose(context.delay(duration));
};
