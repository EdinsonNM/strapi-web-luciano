import { Noticia } from "../models/noticia";

export class NoticiaMapping {
  toList = (data: any[]): Noticia[] => {
    return data.map((item) =>
      this.toObject({ id: item.id, ...item.attributes })
    );
  };
  toObject = (data: any): Noticia => {
    return data as Noticia;
  };
}
