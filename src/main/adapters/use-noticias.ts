import { noticiaFactory } from "./../factories/noticia-factory";
import { useQuery } from "@tanstack/react-query";

export const useNoticias = () => {
  const result = useQuery(["noticias"], () => noticiaFactory.getAll(), {
    enabled: true,
  });
  return result;
};
