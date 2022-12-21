import { EgresadoProvider } from "../../domain/providers/egresado-provider";
import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "./../../core/http/http-client";

export class EgresadoProviderService implements EgresadoProvider {
  constructor(private client: HttpClient) {}
  getAll = (): Promise<HttpResponse<any>> => {
    return this.client.request({ method: HttpMethod.GET, url: "egresados" });
  };
}
