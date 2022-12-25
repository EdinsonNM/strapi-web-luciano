import { Noticia } from "../models/noticia";

export class NoticiaMapping {
  toList = (data: any[]): Noticia[] => {
    return data.map((item) =>
      this.toObject({ id: item.id, ...item.attributes,
        mediaNoticia:
          "https://lobster-app-c5rxq.ondigitalocean.app" +
          item.attributes.mediaNoticia.data[0].attributes.url,
      }) 
    );
  };
  toObject = (data: any): Noticia => {
    return data as Noticia;
  };
}
