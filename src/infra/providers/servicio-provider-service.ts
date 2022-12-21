import { ServicioProvider } from "../../domain/providers/servicio-provider";
import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "./../../core/http/http-client";

export class ServicioProviderService implements ServicioProvider {
  constructor(private client: HttpClient) {}
  getAll = (params: string): Promise<HttpResponse<any>> => {
    return this.client.request({
      method: HttpMethod.GET,
      url: `servicios?populate=*&${params}`,
    });
  };
}
