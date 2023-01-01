import { UserResponse, UsersResponse } from "@/models/user";

export type Methods = {
  get: {
    resBody: UsersResponse;
  };

  post: {
    reqBody: {
      id: string;
    };
    resBody: UserResponse;
  };
};
