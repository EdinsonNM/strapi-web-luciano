import { httpClientFactory } from "./http-client-factory";
import { EgresadoProviderService } from "../../infra/providers/egresado-provider-service";
import { EgresadoRepository } from "../../domain/repositories/egresado-repository";
import { EgresadoMapping } from "../../domain/mappings/egresado-mapping";

export const egresadoProviderFactory = new EgresadoProviderService(
  httpClientFactory
);
export const egresadoFactory = new EgresadoRepository(
  egresadoProviderFactory,
  new EgresadoMapping()
);
