import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "../../core/http/http-client";
export interface NoticiaProvider {
  getAll(params?: string): Promise<HttpResponse<any>>;
}
