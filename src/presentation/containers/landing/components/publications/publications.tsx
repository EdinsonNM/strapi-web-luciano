import { Publicacion } from "../../../../../domain/models/publicacion";

type Props = {
  data: Publicacion[];
};
export const Publications = ({ data = [] }: Props) => {
  return (
    <section className="my-8">
      <h3 className="text-left text-3xl">Publicaciones</h3>
      <h6 className="text-left text-sm mb-10">
        Conoce nuestros programas de estudio
      </h6>
      <div className="flex flex-row justify-around content-around">
        {data.map((item) => (
          <div
            role="button"
            className="group bg-white hover:bg-[#7F56D9] rounded-xl drop-shadow-md px-5 py-7 m-auto w-[340px]"
          >
            <img src={item.images} />

            <h4 className="group-hover:text-[#F4EBFF] font-bold text-ellipsis overflow-hidden mt-4">
              {item.title}
            </h4>
            <p className="text-sm font-light text-[#c2c2c2] group-hover:text-white text-ellipsis overflow-hidden h-[50px]">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
