import { FC } from "react";

import { useAsyncValue } from "react-router-dom";

import { DateResponse } from "@/models/date";

export const Date: FC = () => {
  const { date } = useAsyncValue() as DateResponse;

  return <time>{date}</time>;
};
