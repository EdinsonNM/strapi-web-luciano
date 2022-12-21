import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "../../core/http/http-client";
export interface ServicioProvider {
  getAll(params: string): Promise<HttpResponse<any>>;
}
