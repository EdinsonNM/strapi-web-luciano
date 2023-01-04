import { httpClientFactory } from "./http-client-factory";
import { DatosgeneralesProviderService } from "../../infra/providers/datosgenerales-provider-service";
import { DatosgeneralesRepository } from "../../domain/repositories/datosgenerales-repository";
import { DatosgeneralesMapping } from "../../domain/mappings/datosgenerales-mapping";

export const DatosgeneralesProviderFactory = new DatosgeneralesProviderService(
  httpClientFactory
);
export const datosgeneralesFactory = new DatosgeneralesRepository(
    DatosgeneralesProviderFactory,
  new DatosgeneralesMapping()
);
