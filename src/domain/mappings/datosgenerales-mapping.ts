import { Datosgenerales } from "../models/datosgenerales";

export class DatosgeneralesMapping {
  toList = (data: any[]): Datosgenerales[] => {
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
  toObject = (data: any): Datosgenerales => {
    return data as Datosgenerales;
  };
}
