import { ProgramMapping } from "./../../domain/mappings/program-mapping";
import { httpClientFactory } from "./http-client-factory";
import { ProgramRepository } from "./../../domain/repositories/program-repository";
import { ProgramProviderService } from "../../infra/providers/program-provider-service";

export const programProviderFactory = new ProgramProviderService(
  httpClientFactory
);
export const programFactory = new ProgramRepository(
  programProviderFactory,
  new ProgramMapping()
);
