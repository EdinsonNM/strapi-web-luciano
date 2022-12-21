import { HttpResponse } from "./../../core/http/http-client";
import { firstValueFrom } from "rxjs";
import { from } from "rxjs/internal/observable/from";
import { map } from "rxjs/internal/operators/map";
import { Publicacion } from "../models/publicacion";
import { PublicacionProvider } from "../providers/publicacion-provider";
import { PublicacionMapping } from "../mappings/publicacion-mapping";
export class PublicacionRepository {
  constructor(
    private _publicacionProvider: PublicacionProvider,
    private _publicacionMapping: PublicacionMapping
  ) {}
  getAll = (params: string): Promise<Publicacion[]> => {
    const source$ = from(this._publicacionProvider.getAll(params)).pipe(
      map((response: HttpResponse) => response.body as any),
      map((body) => body.data as any[]),
      map(this._publicacionMapping.toList)
    );
    return firstValueFrom(source$);
  };
}
