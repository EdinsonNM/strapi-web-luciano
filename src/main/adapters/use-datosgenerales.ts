import { datosgeneralesFactory } from "./../factories/datosgenerales-factory";
import { useQuery } from "@tanstack/react-query";

export const useDatosGenerales = () => {
  const result = useQuery(["datosgenerales"], () => datosgeneralesFactory.getAll(), {
    enabled: true,
  });
  return result;
};

