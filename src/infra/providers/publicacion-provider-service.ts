import { ProgramProvider } from "../../domain/providers/program-provider";
import {
  HttpClient,
  HttpMethod,
  HttpResponse,
} from "./../../core/http/http-client";

export class PublicacionProviderService implements ProgramProvider {
  constructor(private client: HttpClient) {}
  getAll = (params: string = ""): Promise<HttpResponse<any>> => {
    return this.client.request({
      method: HttpMethod.GET,
      url: `publications?populate=*&${params}`,
    });
  };
}
