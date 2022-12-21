import { ProgramProvider } from "../../domain/providers/program-provider";
import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "./../../core/http/http-client";
export class ProgramProviderService implements ProgramProvider {
  constructor(private client: HttpClient) {}
  getAll = (): Promise<HttpResponse<any>> => {
    return this.client.request({ method: HttpMethod.GET, url: "programas" });
  };
}
