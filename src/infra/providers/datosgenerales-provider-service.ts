import { DatosgeneralesProvider } from "../../domain/providers/datosgenerales-provider";
import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "./../../core/http/http-client";

export class DatosgeneralesProviderService implements DatosgeneralesProvider {
  constructor(private client: HttpClient) {}
  getAll = (): Promise<HttpResponse<any>> => {
    return this.client.request({
      method: HttpMethod.GET, url: "datosgenerales" 
    });
  };
}
