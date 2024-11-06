import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>Para poder convalidar el módulo de Segunda Lengua Extranjera debe aportarse siempre estudios cursados y superados en la misma lengua que se desee convalidar. Es necesario acreditar alguna de las siguientes condiciones:</p>
      </div>
      <div className="pt-4 flex justify-center">
        <table className="border-separate">
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Módulo a convalidar</td>
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Formación a aportar</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="4">2ª Lengua Extranjera LOGSE.</td>
            <td className="border-gray-200 border-[1px] p-2">
              MP Segunda Lengua Extranjera LOGSE, siempre que sea la misma que la que se desea convalidar.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Certificado de Nivel Intermedio (B1), equivalente o superior, de la Escuela Oficial de Idiomas (RD 1629/2006, de 29 de diciembre) siempre que sea de la misma lengua extranjera que la que se desea convalidar.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Título de Grado en Filología o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              Título de Grado Traducción e Interpretación, o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="4">0180 2ª Lengua Extranjera.</td>
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Segunda Lengua Extranjera LOGSE.</li>
                <li>Cuando la lengua extranjera cursada y superada sea la misma que se desea convalidar.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado del Ciclo Elemental o de Aptitud, de la Escuela Oficial de Idiomas.</li>
                <li>(RD 967/1988, de 2 de septiembre).</li>
                <li>(De la misma lengua extranjera que se desea convalidar).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Certificado de Nivel Intermedio (B1), o superior, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).</li>
                <li>(De la misma lengua extranjera que se desea convalidar).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Título de Grado, o equivalente, en Filología o en Traducción e Interpretación.</li>
                <li>(De la misma especialidad que la lengua extranjera que se desea convalidar).</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div className="bg-yellow-100 border-black border-[1px] mt-7 p-3 pl-6 pr-6 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center space-x-4">
          <Image src="/Nota.png" alt="Nota" width="80" height="80"></Image>
          <h1 className="text-4xl font-bold text-red-900">Para saber más</h1>
        </div>
        <p className="text-red-900">Por tanto, no es posible, <mark><u className="font-bold text-red-900">EN NINGÚN CASO</u></mark>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
      </div>
      <div>
        <Nav pos={9} />
      </div>
    </div>
  );
}
    