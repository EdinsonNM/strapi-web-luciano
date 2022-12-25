import { HttpResponse } from "./../../core/http/http-client";
import { firstValueFrom } from "rxjs";
import { from } from "rxjs/internal/observable/from";
import { map } from "rxjs/internal/operators/map";
import { NoticiaProvider } from "../providers/noticia-provider";
import { NoticiaMapping } from "../mappings/noticia-mapping";
import { Noticia } from "../models/noticia";

export class NoticiaRepository {
  constructor(
    private _noticiaProvider: NoticiaProvider,
    private _noticiaMapping: NoticiaMapping
  ) {}
  getAll = (params: string): Promise<Noticia[]> => {
    const source$ = from(this._noticiaProvider.getAll(params)).pipe(
      map((response: HttpResponse) => response.body as any),
      map((body) => body.data as any[]),
      map(this._noticiaMapping.toList)
    );
    return firstValueFrom(source$);
  };
}
