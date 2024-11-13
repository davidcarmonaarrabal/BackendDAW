import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.2.3.- Condiciones para convalidar Inglés"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>La documentación a aportar varía en función del módulo Inglés que se desee convalidar. Siempre deben ser estudios cursados y superados de lengua inglesa.</p>
      </div>
      <div className="pt-4 flex justify-center pr-16 pl-16">
        <table className="border-separate">
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Módulo a convalidar</td>
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Formación a aportar</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="10">0156 Inglés</td>
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Lengua Extranjera LOGSE (duración de 65 horas, según el Real Decreto que establece el título de formación profesional y sus enseñanzas mínimas).</li>
                <li>Cuando la lengua extranjera cursada y superada sea inglés.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Lengua Extranjera LOGSE o de la C.A.</li>
                <li>Cuando la lengua extranjera cursada y superada sea inglés.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Módulos Profesionales de Lengua.</li>
                <li>Extranjera LOGSE de ciclos formativos de Grado Superior, en cualquiera de sus denominaciones, siempre que sea la misma que la que se desea convalidar.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado del Ciclo Elemental, de Inglés, de la Escuela Oficial de Idiomas.</li>
                <li>(RD 967/1988, de 2 de septiembre).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Certificado de Nivel Intermedio (B1), de Inglés, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas.</li>
                <li>(RD 967/1988, de 2 de septiembre).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas.</li>
                <li>(RD 1629/2006, de 29 de diciembre).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Título de Grado, o equivalente, en Filología Inglesa.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              0179 Inglés.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="7">0179 Inglés</td>
            <td className="border-gray-200 border-[1px] p-2">
              Lengua Extranjera LOGSE (Inglés).
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Lengua Extranjera (duración de 90 horas, según reales decretos por los que se establecen los títulos de formación profesional y sus enseñanzas mínimas).</li>
                <li>Cuando la lengua extranjera cursada y superada sea inglés.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Lengua Extranjera en Comercio Internacional.</li>
                <li>Cuando la lengua extranjera cursada y superada sea inglés.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas.</li>
                <li>(RD 967/1988, de 2 de septiembre).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas.</li>
                <li>(RD 1629/2006, de 29 de diciembre).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Título de Grado, o equivalente, en Filología Inglesa.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).
            </td>
          </tr>
        </table>
      </div>
      <div className="bg-yellow-100 border-black border-[1px] mt-7 p-3 pl-6 pr-6 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] ml-6 mr-6">
        <div className="flex items-center space-x-4">
          <Image src="/Nota.png" alt="Nota" width="80" height="80"></Image>
          <h1 className="text-4xl font-bold text-red-900">Para saber más</h1>
        </div>
        <p className="text-red-900">Por tanto, no es posible, <mark><u className="font-bold text-red-900">EN NINGÚN CASO</u></mark>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
      </div>
      <div>
        <Nav pos={8} />
      </div>
    </div>
  );
}
    