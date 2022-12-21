import { programFactory } from "./../factories/program-factory";
import { useQuery } from "@tanstack/react-query";
import { ProgramRepository } from "../../domain/repositories/program-repository";

export const usePrograms = () => {
  const result = useQuery(["programs"], () => programFactory.getAll(), {
    enabled: true,
  });
  return result;
};
