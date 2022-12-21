import { publicacionFactory } from "./../factories/publicacion-factory";
import { useQuery } from "@tanstack/react-query";

export const usePublicaciones = (params: string = "") => {
  const result = useQuery(
    ["publicaciones"],
    () => publicacionFactory.getAll(params),
    {
      enabled: true,
    }
  );
  return result;
};
