import { HttpResponse } from "./../../core/http/http-client";
import { firstValueFrom } from "rxjs";
import { from } from "rxjs/internal/observable/from";
import { Program } from "../models/program";
import { ProgramProvider } from "./../providers/program-provider";
import { map } from "rxjs/internal/operators/map";
import { ProgramMapping } from "../mappings/program-mapping";
import { EgresadoProvider } from "../providers/egresado-provider";
import { EgresadoMapping } from "../mappings/egresado-mapping";
import { Egresado } from "../models/egresado";

export class EgresadoRepository {
  constructor(
    private _egresadoProvider: EgresadoProvider,
    private _egresadoMapping: EgresadoMapping
  ) {}
  getAll = (): Promise<Egresado[]> => {
    const source$ = from(this._egresadoProvider.getAll()).pipe(
      map((response: HttpResponse) => response.body as any),
      map((body) => body.data as any[]),
      map(this._egresadoMapping.toList)
    );
    return firstValueFrom(source$);
  };
}
