import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Servicio } from "../../../../../domain/models/servicio";
type Props = {
  data: Servicio[];
};
export const Services = ({ data }: Props) => {
  return (
    <section className="mt-8">
      <h3 className="text-center text-3xl mb-10">Te ofrecemos</h3>
      <div className="flex flex-col">
        <CarouselProvider
          naturalSlideWidth={300}
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
                  className="flex flex-col items-center group bg-[#F9FAFB] hover:bg-[#7F56D9] px-5 py-7 m-auto w-[250px]"
                >
                  <div className="rounded-full bg-white w-[100px] h-[100px] z-10 overflow-hidden">
                    <img
                      className="rounded-full object-cover w-[100px] h-[100px] bg-bottom"
                      src="https://purepng.com/public/uploads/large/purepng.com-studentsstudentcollege-studentschool-studentstudentsmale-female-1421526923960d2xfn.png"
                    />
                  </div>
                  <h4 className="group-hover:text-[#F4EBFF] font-bold text-ellipsis overflow-hidden h-16">
                    {item.nombreServicio}
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
