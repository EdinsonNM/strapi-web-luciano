import { useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./landing.css";
import React from "react";
import { usePrograms } from "../../../main/adapters/use-programs";
import { Programs } from "./components/programs/programs";
import { Menu } from "./components/menu/menu";
import { Publications } from "./components/publications/publications";
import { usePublicaciones } from "../../../main/adapters/use-publicaciones";
import { useNoticias } from "../../../main/adapters/use-noticias";
import { useEgresados } from "../../../main/adapters/use-egresados";
import { Services } from "./components/services/services";
import { Egresados } from "./components/egresados/egresados";
import { Noticias } from "./components/noticias/noticias";
import { useServicios } from "../../../main/adapters/use-servicios";
import { Banner } from "./components/banner/banner";
import { Footer } from "./components/footer/footer";

export const Landing = () => {
  const { data: programs = [] } = usePrograms();
  const { data: publicaciones = [] } = usePublicaciones("_limit=3");
  const { data: servicios = [] } = useServicios("");
  const { data: egresados = [] } = useEgresados("_limit=6");
  const { data: noticias = [] } = useNoticias("_limit=3");
  return (
    <div className="flex flex-col w-full">
      <header className="flex flex-row justify-between w-full max-w-7xl m-auto h-[100px] items-center">
        <h1>IST. LUCIANO CASTILLO</h1>
        <Menu />
      </header>
      <main className="w-full max-w-7xl m-auto mt-24">
        <Banner />
        <Programs data={programs} />
        <Publications data={publicaciones} />
        <Services data={servicios} />
        <Egresados data={egresados} />
        <Noticias data={noticias} />
      </main>
      <Footer />
    </div>
  );
};
