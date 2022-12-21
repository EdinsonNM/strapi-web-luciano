import { HttpResponse } from "./../../core/http/http-client";
import { firstValueFrom } from "rxjs";
import { from } from "rxjs/internal/observable/from";
import { Program } from "../models/program";
import { ProgramProvider } from "./../providers/program-provider";
import { map } from "rxjs/internal/operators/map";
import { ProgramMapping } from "../mappings/program-mapping";
export class ProgramRepository {
  constructor(
    private _programProvider: ProgramProvider,
    private _programMapping: ProgramMapping
  ) {}
  getAll = (): Promise<Program[]> => {
    const source$ = from(this._programProvider.getAll()).pipe(
      map((response: HttpResponse) => response.body as any),
      map((body) => body.data as any[]),
      map(this._programMapping.toPrograms)
    );
    return firstValueFrom(source$);
  };
}
