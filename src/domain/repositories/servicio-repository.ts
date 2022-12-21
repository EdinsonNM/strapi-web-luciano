import { HttpResponse } from "./../../core/http/http-client";
import { firstValueFrom } from "rxjs";
import { from } from "rxjs/internal/observable/from";
import { Program } from "../models/program";
import { ProgramProvider } from "./../providers/program-provider";
import { map } from "rxjs/internal/operators/map";
import { ServicioProvider } from "../providers/servicio-provider";
import { ServicioMapping } from "../mappings/servicio-mapping";
import { Servicio } from "../models/servicio";
export class ServicioRepository {
  constructor(
    private _servicioProvider: ServicioProvider,
    private _servicioMapping: ServicioMapping
  ) {}
  getAll = (params: string): Promise<Servicio[]> => {
    const source$ = from(this._servicioProvider.getAll(params)).pipe(
      map((response: HttpResponse) => response.body as any),
      map((body) => body.data as any[]),
      map(this._servicioMapping.toList)
    );
    return firstValueFrom(source$);
  };
}
