import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
  } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";
  import { Noticia } from "../../../../../domain/models/noticia";

  type Props = {
    data: Noticia[];
  };
  export const Noticias = ({ data }: Props) => {
    return (
      <section className="my-8">
      <h3 className="text-center text-3xl mb-10">Te mantenemos Informado</h3>
      <div className="flex flex-row justify-around content-around">
        {data.map((item) => (
          <div
            role="button"
            className="group bg-white hover:bg-[#7F56D9] rounded-xl drop-shadow-md px-5 py-7 m-auto w-[340px]"
          >
            <img src={item.mediaNoticia} />

            <h4 className="group-hover:text-[#F4EBFF] font-bold text-ellipsis overflow-hidden mt-4">
              {item.titulo}
            </h4>
            <p className="text-sm font-light text-[#c2c2c2] group-hover:text-white text-ellipsis overflow-hidden h-[50px]">
              {item.subtitulo}
            </p>
          </div>
        ))}
      </div>
    </section>
      );
};