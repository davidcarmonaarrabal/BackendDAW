import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.2.1.- Condiciones para convalidar FOL"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div>
        <div>
          <p>Para poder convalidar el módulo de FOL (Formación y Orientación Laboral) es necesario acreditar alguna de las siguientes condiciones:</p>
        </div>
        <div className="pt-3">
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Si el módulo a convalidar pertenece a un ciclo LOE (Ley Orgánica 2/2006, de 3 de mayo). <b>Para esta convalidación es indiferente que los módulos que se aporten sean de grado medio o superior.</b></span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><b>Tener aprobado el módulo de FOL en cualquier otro Ciclo LOE y acreditarlo documentalmente.</b></li>
            <li><b>Tener aprobado el módulo de FOL en un Ciclo LOGSE (Ley Orgánica 1/1990, de 3 de octubre) y poseer un certificado que acredite que se posee la formación establecida para el desempeño de las funciones de nivel básico de la actividad preventiva</b> (PRL). Sirve cualquier curso de PRL impartido por alguna entidad legalmente constituida, de una duración no inferior a 30 horas y cuyos contenidos incluyan los que indica el anexo IV del Real Decreto 39/1997, de 17 de enero (BOE de 31 de enero de 1997), por el que se aprueba el Reglamento de los Servicios de Prevención. El certificado del curso de PRL deberá hacer constar específicamente tanto la duración como los contenidos impartidos.</li>
            <li><b>Poseer el título de Técnico Superior en Prevención de Riesgos Profesionales derivado de la Ley Orgánica 1/1990, de 3 de octubre.</b></li>
          </ul>
        </div>
        <div>
          <p>Para poder convalidar el módulo de FOL (Formación y Orientación Laboral) es necesario acreditar alguna de las siguientes condiciones:</p>
        </div>
        <div className="pt-3">
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Si el módulo a convalidar pertenece a un ciclo LOGSE de grado medio (Ley Orgánica 1/1990, de 3 de octubre):</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><b>Tener aprobado el módulo de FOL en un Ciclo LOGSE (Ley Orgánica 1/1990, de 3 de octubre).</b></li>
            <li><b>Tener aprobado el módulo de FOL en cualquier otro Ciclo LOE y acreditarlo documentalmente.</b></li>
          </ul>
        </div>
        <div className="pt-3">
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Si el módulo a convalidar pertenece a un ciclo LOGSE de grado superior (Ley Orgánica 1/1990, de 3 de octubre):</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><b>Tener aprobado el módulo de FOL en un Ciclo LOGSE de Grado Superior (Ley Orgánica 1/1990, de 3 de octubre).</b></li>
          </ul>
        </div>
        <div className="pt-4 flex justify-center">
          <table className="border-separate">
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Módulo a convalidar</td>
              <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Formación a aportar</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="4">FOL GM (LOGSE Ley Orgánica 1/1990, de 3 de octubre)</td>
              <td className="border-gray-200 border-[1px] p-2">FOL GM LOGSE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GS LOGSE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GM LOE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GS LOE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="1">FOL GS (LOGSE Ley Orgánica 1/1990, de 3 de octubre)</td>
              <td className="border-gray-200 border-[1px] p-2">FOL GS LOGSE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="5">FOL GM (LOE Ley Orgánica 2/2006, de 3 de mayo)</td>
              <td className="border-gray-200 border-[1px] p-2">FOL GM LOE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GS LOE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GM LOGSE + Certificado nivel básico actividad preventiva</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GS LOGSE + Certificado nivel básico actividad preventiva</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">Título Técnico Superior en Prevención de Riesgos Profesionales</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="5">FOL GS (LOE Ley Orgánica 2/2006, de 3 de mayo)</td>
              <td className="border-gray-200 border-[1px] p-2">FOL GM LOE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GS LOE</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GM LOGSE + Certificado nivel básico actividad preventiva</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">FOL GS LOGSE + Certificado nivel básico actividad preventiva</td>
            </tr>
            <tr className="hover:bg-blue-200 transition duration-100">
              <td className="border-gray-200 border-[1px] p-2">Título Técnico Superior en Prevención de Riesgos Profesionales</td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <Nav pos={6} />
      </div>
    </div>
  );
}
