import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "./../../core/http/http-client";
export interface ProgramProvider {
  getAll(): Promise<HttpResponse<any>>;
}
