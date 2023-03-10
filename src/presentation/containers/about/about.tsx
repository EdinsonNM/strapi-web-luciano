import { useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import { Banner } from "../landing/components/banner/banner";
import { Menu } from "../landing/components/menu/menu";
import { Footer } from "../landing/components/footer/footer";
import { useDatosGenerales } from "../../../main/adapters/use-datosgenerales";
import { FcBullish } from "react-icons/fc";
export const About = () => {
  const { data: datosgenerales = [] } = useDatosGenerales();
  return (
    <div className="flex flex-col w-full">      
      <header className="flex flex-row justify-between w-full max-w-7xl m-auto h-[100px] items-center">
        <h1>IST. LUCIANO CASTILLO</h1>
        <Menu />
      </header>
      <main className="w-full max-w-7xl m-auto mt-6">
        <Banner />
        <hr className="mt-5"></hr>
        <section className="mb-10 mt-5">
          <h3 className="text-5xl mb-6 text-indigo-800">Misión</h3>
          <div className="grid gap-2 grid-cols-3 flex">  
            <div className="col-span-2">        
            <p className="text-base my-3 leading-6 text-zinc-400 text-justify text-2xl">
              Somos una persona jurídica, que goza de autonomía académica,
              económica y administrativa; genera y difunde conocimiento
              científico-tecnológico a la población estudiantil, brinda formación
              con responsabilidad social, humanista, que contribuya al desarrollo
              sostenible de la región y del país.
            </p>
            </div>
            <img src="/images/about/mision.jpg" className="justify-center col-span-1 w-32 rounded-3xl"></img>
          </div>         
        </section>
 
        <section className="mb-10 mt-5">
          <h3 className="text-5xl mb-6 text-indigo-800">Visión</h3>
          <div className="grid gap-2 grid-cols-3">  
            <div className="col-span-1 justify-center"><img src="/images/about/mision.jpg" className="w-32"></img></div>
            <div className="col-span-2">
              <p className="text-base my-3 leading-6 text-zinc-400 text-2xl text-justify">
                Somos una persona jurídica, que goza de autonomía académica,
                económica y administrativa ; genera y difunde conocimiento
                científico-tecnológico a la población estudiantil, brinda formación
                con responsabilidad social, humanista, que contribuya al desarrollo
                sostenible de la región y del país.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <h3 className="text-5xl mb-6 text-indigo-800">Nuestra historia</h3>
          <p className="text-base my-3 leading-6 text-zinc-400 text-justify text-2xl">El Instituto de Educación Superior Tecnológico Público “LUCIANO
          CASTILLO COLONNA” fue creado mediante Resolución Ministerial Nº
          290-87-ED del 23 de junio de 1987 y revalidado con R.D. N°
          282-2005-ED. Inicialmente se autoriza el funcionamiento de tres
          Carreras Profesionales: Química Industrial, Mecánica de Producción y
          Contabilidad. Se dispone su funcionamiento desde el segundo semestre
          de 1987. Lo que se realiza a partir del 5 de septiembre de dicho año.
          Para ello, la Municipalidad Provincial de Talara promueve y aprueba un
          Convenio Educativo que con fecha 10 de agosto de 1987 se celebra entre
          la Zona de Educación de Sullana y el Concejo Provincial. Se extiende
          el convenio con el Centro Educativo de Menores "José Cayetano Heredia"
          en la misma ciudad, donde se prestan las actividades educativas hasta
          1989 en que se traslada a la I.E. Nº 15508. A partir del segundo
          semestre de 1988 opera con presupuesto del Ministerio de Educación. En
          1988 la Municipalidad Provincial de Talara entrega el terreno para
          laconstrucción del local del Instituto. La infraestructura empieza a
          ser levantada por la Municipalidad con financiamiento, en ese
          entonces, de la CorporaciónDepartamental de Desarrollo de Piura
          CORDEPIURA. La Carrera de EnfermeríaTécnica empieza a darse a partir
          de 1990 según Resolución Directoral Nº 1820-90ED Del 26 de julio de
          1990. Por Resolución Directoral Nº 192-99-ED del 3 de marzo de 1999 se
          autoriza el funcionamiento de la Carrera Profesional de Computación e
          Informática a partir del mismo año. El 2 de diciembre de 1999, por
          Resolución Directoral Nº 8340-99-ED se autoriza al Instituto para que
          a partir del año 2000 desarrolle los estudios en Mecánica Automotriz.
          El 10 de diciembre de 2007, por Resolución Jefatural Nº 0375-2007-ED
          se autoriza al Instituto para que a partir del año 2008 desarrolle los
          estudios en Tecnología Pesquera.</p>
        </section>
        <hr className="mt-5"></hr>
      </main>
      <Footer />
    </div>
    
  );
};
