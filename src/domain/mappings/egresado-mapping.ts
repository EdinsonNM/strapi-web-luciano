import { Egresado } from "../models/egresado";

export class EgresadoMapping {
  toList = (data: any[]): Egresado[] => {
    return data.map((item) =>
      this.toObject({ id: item.id, ...item.attributes })
    );
  };
  toObject = (data: any): Egresado => {
    return data as Egresado;
  };
}
