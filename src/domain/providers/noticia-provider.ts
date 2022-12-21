import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "../../core/http/http-client";
export interface NoticiaProvider {
  getAll(): Promise<HttpResponse<any>>;
}
