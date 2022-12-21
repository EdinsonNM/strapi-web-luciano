import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "../../core/http/http-client";
export interface PublicacionProvider {
  getAll(params?: string): Promise<HttpResponse<any>>;
}
