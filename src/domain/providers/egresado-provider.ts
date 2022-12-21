import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "../../core/http/http-client";
export interface EgresadoProvider {
  getAll(): Promise<HttpResponse<any>>;
}
