import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Program } from "../../../../../domain/models/program";
type Props = {
  data: Program[];
};
export const Programs = ({ data }: Props) => {
  return (
    <section className="mt-8">
      <h3 className="text-center text-3xl mb-10">
        Conoce nuestros programas de estudio
      </h3>
      <div className="flex flex-col">
        <CarouselProvider
          naturalSlideWidth={426.6}
          naturalSlideHeight={280}
          totalSlides={data.length}
          orientation="horizontal"
          visibleSlides={3}
          infinite={true}
        >
          <Slider className="max-w-7xl">
            {data.map((item, index) => (
              <Slide key={`program` + item.id} index={index} className="p-6">
                <div
                  role="button"
                  className="group bg-white hover:bg-[#7F56D9] rounded-xl drop-shadow-md px-5 py-7 m-auto w-[340px]"
                >
                  <h4 className="group-hover:text-[#F4EBFF] font-bold text-ellipsis overflow-hidden h-16">
                    {item.nombrePrograma}
                  </h4>
                  <p className="text-sm font-light text-[#c2c2c2] group-hover:text-white text-ellipsis overflow-hidden h-[80px]">
                    {item.descripcion}
                  </p>
                  <a
                    href="#"
                    className="flex flex-row content-start gap-2 mt-4"
                  >
                    <span className="text-[#7F56D9] group-hover:text-white">
                      Conoce mas
                    </span>
                    <svg
                      className="my-auto group-hover:fill-white"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11.5L6 6.5L1 1.5"
                        stroke="#7F56D9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  );
};
