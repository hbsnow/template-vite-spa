import { FC } from "react";

import { useAsyncValue } from "react-router-dom";

import { DateResponse } from "@/models/date";

type Props = {
  date: DateResponse["date"];
};

export const DatePresenter: FC<Props> = (props) => {
  const { date } = props;

  return <time>{date}</time>;
};

export const Date: FC = () => {
  const { date } = useAsyncValue() as DateResponse;

  return <DatePresenter date={date} />;
};
