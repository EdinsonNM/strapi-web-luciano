import { noticiaFactory } from "./../factories/noticia-factory";
import { useQuery } from "@tanstack/react-query";

export const useNoticias = (params: string = "") => {
  const result = useQuery(["noticias"], () => noticiaFactory.getAll(params), {
    enabled: true,
  });
  return result;
};
