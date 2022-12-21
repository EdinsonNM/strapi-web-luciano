import { Program } from "../models/program";

export class ProgramMapping {
  toPrograms = (data: any[]): Program[] => {
    return data.map((item) =>
      this.toProgram({ id: item.id, ...item.attributes })
    );
  };
  toProgram = (data: any): Program => {
    return data as Program;
  };
}
