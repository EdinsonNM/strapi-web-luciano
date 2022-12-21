import { HttpClientAxios } from "../../infra/core/http-client-axios";

export const httpClientFactory = new HttpClientAxios(
  import.meta.env.VITE_APP_SERVER_URL
);
