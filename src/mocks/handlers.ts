import { DefaultBodyType, MockedRequest, rest, RestHandler } from "msw";

import { client } from "@/api/client";
import { delay } from "@/mocks/utils/delay";
import { dateResponseDummy } from "@/tests/fixtures/date";
import { usersResponseDummy } from "@/tests/fixtures/users";

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get(client.v1.users.$path(), (_, res, ctx) => {
    return res(delay(), ctx.json(usersResponseDummy));
  }),
  rest.get(client.v1.date.$path(), (_, res, ctx) => {
    return res(delay(2000), ctx.json(dateResponseDummy));
  }),
];
