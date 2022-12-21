import { httpClientFactory } from "./http-client-factory";
import { NoticiaProviderService } from "../../infra/providers/noticia-provider-service";
import { NoticiaMapping } from "../../domain/mappings/noticia-mapping";
import { NoticiaRepository } from "../../domain/repositories/noticia-repository";

export const noticiaProviderFactory = new NoticiaProviderService(
  httpClientFactory
);
export const noticiaFactory = new NoticiaRepository(
  noticiaProviderFactory,
  new NoticiaMapping()
);
