import { httpClientFactory } from "./http-client-factory";
import { ServicioProviderService } from "../../infra/providers/servicio-provider-service";
import { ServicioRepository } from "../../domain/repositories/servicio-repository";
import { ServicioMapping } from "../../domain/mappings/servicio-mapping";

export const servicioProviderFactory = new ServicioProviderService(
  httpClientFactory
);
export const servicioFactory = new ServicioRepository(
  servicioProviderFactory,
  new ServicioMapping()
);
