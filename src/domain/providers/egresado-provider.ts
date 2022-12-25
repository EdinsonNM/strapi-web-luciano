import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "../../core/http/http-client";
export interface EgresadoProvider {
  getAll(params?: string): Promise<HttpResponse<any>>;
}
