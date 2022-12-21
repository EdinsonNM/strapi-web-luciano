import { egresadoFactory } from "./../factories/egresado-factory";
import { useQuery } from "@tanstack/react-query";
import { servicioFactory } from "../factories/servicio-factory";

export const useServicios = (params: string = "") => {
  const result = useQuery(["servicios"], () => servicioFactory.getAll(params), {
    enabled: true,
  });
  return result;
};
