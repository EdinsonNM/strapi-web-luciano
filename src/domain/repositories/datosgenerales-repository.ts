import { HttpResponse } from "./../../core/http/http-client";
import { firstValueFrom } from "rxjs";
import { from } from "rxjs/internal/observable/from";
import { Datosgenerales } from "../models/datosgenerales";
import { DatosgeneralesProvider } from "./../providers/datosgenerales-provider";
import { map } from "rxjs/internal/operators/map";
import { DatosgeneralesMapping } from "../mappings/datosgenerales-mapping";
export class DatosgeneralesRepository {
  constructor(
    private _datosgeneralesProvider: DatosgeneralesProvider,
    private _datosgeneralesMapping: DatosgeneralesMapping
  ) {}
  getAll = (): Promise<Datosgenerales[]> => {
    const source$ = from(this._datosgeneralesProvider.getAll()).pipe(
      map((response: HttpResponse) => response.body as any),
      map((body) => body.data as any[]),
      map(this._datosgeneralesMapping.toList)
    );
    return firstValueFrom(source$);
  };
}
