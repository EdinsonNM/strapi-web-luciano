import { BiLibrary } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";

export const Banner = () => {
  return (
    <section id="banner" className="flex flex-row justify-between">
      <div className="max-w-[480px] pt-12">
        <h2 className="text-6xl">
          <span className="text-[#7F56D9]">Luciano Castillo Colonna</span>
        </h2>
        <p className="text-2xl my-3 leading-6">
          Instituto de Educación Superior Tecnológico Público
        </p>
        <div>
          <button className="text-white rounded-lg bg-[#7F56D9] px-4 py-2 font-extralight hover:bg-[#F4EBFF] hover:text-[#7F56D9] text-md">
            Conoce mas
          </button>
        </div>
        <div className="flex flex-row mt-8 gap-6">
          <div
            className="flex flex-row items-center justify-center gap-2 hover:text-[#7F56D9]"
            role="button"
          >
            <BiLibrary />
            Biblioteca Virtual
          </div>
          <div
            className="flex flex-row items-center justify-center gap-2 hover:text-[#7F56D9]"
            role="button"
          >
            <SiGoogleclassroom />
            Aula Virtual
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[-10px] left-[-10px] rounded-full border w-[495px] h-[495px] z-0"></div>
        <div className="rounded-full bg-[#7F56D9] w-[495px] h-[495px] z-10 overflow-hidden">
          <img
            className="rounded-full object-cover w-[495px] h-[495px] bg-bottom"
            src="https://purepng.com/public/uploads/large/purepng.com-studentsstudentcollege-studentschool-studentstudentsmale-female-1421526923960d2xfn.png"
          />
        </div>
      </div>
    </section>
  );
};
