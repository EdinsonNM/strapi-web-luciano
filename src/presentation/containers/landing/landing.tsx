import { useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./landing.css";
import React from "react";
import { usePrograms } from "../../../main/adapters/use-programs";
import { Programs } from "./components/programs/programs";
import { Banner } from "./components/banner/banner";
import { Link } from "react-router-dom";
import { Menu } from "./components/menu/menu";
import { Publications } from "./components/publications/publications";
import { usePublicaciones } from "../../../main/adapters/use-publicaciones";
import { Services } from "./components/services/services";
import { useServicios } from "../../../main/adapters/use-servicios";

export const Landing = () => {
  const { data: programs = [] } = usePrograms();
  const { data: publicaciones = [] } = usePublicaciones("_limit=3");
  const { data: servicios = [] } = useServicios("");
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
      </main>
      <footer className="w-full bg-[#101828] py-10">
        <div className="flex flex-row max-w-7xl text-white m-auto">
          <div className="flex-1">Luciano Castillo Colonna</div>
          <div className="flex-1">
            <div className="text-gray-400">Mas información</div>
            <ul className="text-gray-500 text-sm">
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="text-gray-400">Enlaces de interes</div>
            <ul className="text-gray-500 text-sm">
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="text-gray-400">Social</div>
            <ul className="text-gray-500 text-sm">
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
              <li>Sunat</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
