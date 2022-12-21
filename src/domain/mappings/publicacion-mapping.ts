import { Publicacion } from "../models/publicacion";

export class PublicacionMapping {
  toList = (data: any[]): Publicacion[] => {
    return data.map((item) =>
      this.toObject({
        id: item.id,
        ...item.attributes,
        images:
          "https://lobster-app-c5rxq.ondigitalocean.app" +
          item.attributes.images.data[0].attributes.url,
      })
    );
  };
  toObject = (data: any): Publicacion => {
    return data as Publicacion;
  };
}
