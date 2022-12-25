import { egresadoFactory } from "./../factories/egresado-factory";
import { useQuery } from "@tanstack/react-query";

export const useEgresados = (params: string = "") => {
  const result = useQuery(["egresados"], () => egresadoFactory.getAll(params), {
    enabled: true,
  });
  return result;
};

