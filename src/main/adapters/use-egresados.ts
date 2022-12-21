import { egresadoFactory } from "./../factories/egresado-factory";
import { useQuery } from "@tanstack/react-query";

export const useEgresados = () => {
  const result = useQuery(["egresados"], () => egresadoFactory.getAll(), {
    enabled: true,
  });
  return result;
};
