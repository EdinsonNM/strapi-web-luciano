import { Egresado } from "../models/egresado";

export class EgresadoMapping {
  toList = (data: any[]): Egresado[] => {
    return data.map((item) =>
      this.toObject({ id: item.id, ...item.attributes,
        fotografia:"https://lobster-app-c5rxq.ondigitalocean.app" +item.attributes.fotografia.data.attributes.url,
        programa_de_estudio:item.attributes.programas_de_estudio.data.attributes.nombrePrograma}) 
          );
        };
  toObject = (data: any): Egresado => {
    return data as Egresado;
  };
}
