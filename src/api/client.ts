import aspida from "@aspida/fetch";

import api from "@/api/$api";
import { configs } from "@/configs";

const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
  baseURL: configs.apiBaseUrl,
  throwHttpErrors: true,
};

export const client = api(aspida(fetch, fetchConfig));
