import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "../../core/http/http-client";
export interface DatosgeneralesProvider {
    getAll(): Promise<HttpResponse<any>>;
}
