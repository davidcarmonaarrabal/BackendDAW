import Image from "next/image";
import tutorImage from '../app/tutor-and-student.png';  
import Link from "next/link";

export const metadata = {
  title: "Mondongo"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <h1 className="text-3xl border-b-blue-500 border-b-[3px] font-black text-blue-500 pb-3 ">Información general: convalidaciones, exenciones y títulos</h1>
      </header>
      <div className="flex flex-col items-start md:flex-row">
        <div className="w-[90%] pr-4">
          <p className="pt-6">Antes de empezar debemos aclarar la diferencia entre convalidación, exención y traslado de calificación. La convalidación es el procedimiento por el 
            cual se recono  ce como superado un módulo que contiene los contenidos del módulo, módulos profesionales, asignatura o unidad de competencia que se 
            aporta. La exención solo se aplica al módulo profesional de formación en centros de trabajo y se debe aportar una experiencia profesional acreditable 
            y de duración definida. El traslado de calificaciones es la calificación que se asigna a un módulo que posee el mismo código y denominación que otro ya cursado 
            y superado.</p>
          <p className="pt-3">A continuación, se muestra información tutorial que esperamos que te sea de utilidad.</p>
        </div>
        <div className="w-[170px] pr-6 pt-10">
          <Image src={tutorImage} alt="Tutor y alumno" layout="responsive" width={130} height={135} className="w-full"></Image>
        </div>
      </div>
      <div className="pt-6 flex justify-center">
        <table className="border-separate">
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px]">Elaborado por:</td>
            <td className="border-gray-200 border-[1px] w-[900px]">Dirección General de Formación Profesional</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px]">Versión:</td>
            <td className="border-gray-200 border-[1px]">5</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px]">Fecha de publicación:</td>
            <td className="border-gray-200 border-[1px]">3/03/2022</td>
          </tr>
        </table>
      </div>
      <div className="flex justify-end pr-10">
        <Link href={"/informacion_general_convalidaciones_exenciones_y_titulos"}>
          <button className="bg-blue-200 p-1 rounded-r-full font-bold hover:bg-blue-300 transition duration-200">Siguiente {'>>'} </button>
        </Link>
      </div>
    </div>
  );
}
    