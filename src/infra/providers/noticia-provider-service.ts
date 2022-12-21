import { NoticiaProvider } from "../../domain/providers/noticia-provider";
import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "./../../core/http/http-client";

export class NoticiaProviderService implements NoticiaProvider {
  constructor(private client: HttpClient) {}
  getAll = (): Promise<HttpResponse<any>> => {
    return this.client.request({ method: HttpMethod.GET, url: "noticias" });
  };
}
