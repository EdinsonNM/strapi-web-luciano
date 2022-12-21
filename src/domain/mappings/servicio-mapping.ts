import { Servicio } from "../models/servicio";

export class ServicioMapping {
  toList = (data: any[]): Servicio[] => {
    return data.map((item) =>
      this.toObject({ id: item.id, ...item.attributes })
    );
  };
  toObject = (data: any): Servicio => {
    return data as Servicio;
  };
}
