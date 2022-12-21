import { httpClientFactory } from "./http-client-factory";
import { PublicacionProviderService } from "../../infra/providers/publicacion-provider-service";
import { PublicacionRepository } from "../../domain/repositories/publicacion-repository";
import { PublicacionMapping } from "../../domain/mappings/publicacion-mapping";

export const publicacionProviderFactory = new PublicacionProviderService(
  httpClientFactory
);
export const publicacionFactory = new PublicacionRepository(
  publicacionProviderFactory,
  new PublicacionMapping()
);
