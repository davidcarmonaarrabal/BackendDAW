import Image from "next/image";
import tutorImage from '../app/tutor-and-student.png';

export const metadata = {
  title: "Mondongo"
};

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="text-4xl border-b-blue-500 border-[3px] font-black text-blue-500 pb-3 ">Información general: convalidaciones, exenciones y títulos</h1>
      </header>
      <div className="flex">
        <div className="w-5/6">
          <p className="pt-6">Antes de empezar debemos aclarar la diferencia entre convalidación, exención y traslado de calificación. La convalidación es el procedimiento por el 
            cual se reconoce como superado un módulo que contiene los contenidos del módulo, módulos profesionales, asignatura o unidad de competencia que se 
            aporta. La exención solo se aplica al módulo profesional de formación en centros de trabajo y se debe aportar una experiencia profesional acreditable 
            y de duración definida. El traslado de calificaciones es la calificación que se asigna a un módulo que posee el mismo código y denominación que otro ya cursado 
            y superado.</p>
          <p className="pt-3">A continuación, se muestra información tutorial que esperamos que te sea de utilidad.</p>
        </div>
        <div className="w-1/6">
          <Image src={tutorImage} alt="Tutor y alumno" layout="responsive" width={130} height={135}></Image>
        </div>
      </div>
      <div className="pt-6 flex align-items-center">
        <table>
          <tr>
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px]">Elaborado por:</td>
            <td className="hover:bg-blue-200 transition duration-100 border-gray-200 border-[1px]">Dirección General de Formación Profesional</td>
          </tr>
          <tr>
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px]">Versión:</td>
            <td className="hover:bg-blue-200 transition duration-100 border-gray-200 border-[1px]">5</td>
          </tr>
          <tr>
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px]">Fecha de publicación:</td>
            <td className="hover:bg-blue-200 transition duration-100 border-gray-200 border-[1px]">3/03/2022</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
    