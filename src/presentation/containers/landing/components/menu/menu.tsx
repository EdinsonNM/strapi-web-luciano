import { BiHomeAlt } from "react-icons/bi";
import { HiAnnotation } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-5">
        <li>
          <Link
            to="about"
            className="flex flex-row justify-center content-center items-center gap-2"
          >
            <BiHomeAlt />
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className="flex flex-row justify-center content-center items-center gap-2"
          >
            <HiAnnotation />
            Quienes Somos
          </Link>
        </li>
        <li>
          <a href="#">Programas de estudios</a>
        </li>
      </ul>
    </nav>
  );
};
