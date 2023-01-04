import { Link } from "react-router-dom";
export const Footer = () => {
  return (
<footer className="w-full bg-[#101828] py-10">
        <div className="flex flex-row max-w-7xl text-white m-auto">
          <div className="flex-1">Luciano Castillo Colonna</div>
          <div className="flex-1">
            <div className="text-gray-400">Mas información</div>
            <ul className="text-gray-500 text-sm">
              <li>Sunat</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="text-gray-400">Enlaces de interes</div>
            <ul className="text-gray-500 text-sm">
              <li>
                <a href="https://www.gob.pe/minedu" target="_black">Ministerio de Educación</a>
              </li>
              <li><a href="https://www.gob.pe/minedu" target="_black">Gobierno Regional Piura</a></li>
              <li><a href="https://www.sunat.gob.pe" target="_black">Sunat</a></li>
              <li><a href="#" target="_black">DIGETSUPA</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="text-gray-400">Social</div>
            <ul className="text-gray-500 text-sm">
              <li>Sunat</li>
            </ul>
          </div>
        </div>
      </footer>
  );
};