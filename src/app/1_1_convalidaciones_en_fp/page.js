import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "1.1.- Convalidaciones en FP"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>

      <div>
        <div className="pt-11 w-[600px] flex justify-center mx-auto">
          <Image src="/clase.jpg" alt="clase" layout="responsive" width={50} height={50} className="border-black border-[3px]"></Image>
        </div>
        <div className="pt-16">
          <p className="pb-3">La Subdirección General de Ordenación e Innovación de la Formación Profesional del Ministerio de Educación y Formación Profesional, informa que el <b>plazo de presentación de solicitudes de convalidaciones de los alumnos en el centro se inicia el día que comienza el curso escolar y finaliza el último día del curso escolar.</b> Tratándose con preferencia los expedientes presentados desde el inicio del plazo de matriculación hasta la finalización del mes de octubre.</p>
          <p className="pb-3">Este plazo es revisado de forma estricta por el Ministerio acogiéndose al Real Decreto 1085/2020, de 9 de diciembre, por el que se establecen convalidaciones de módulos profesionales de los títulos de Formación Profesional del sistema educativo español y las medidas para su aplicación, y se modifica el Real Decreto 1147/2011, de 29 de julio, por el que se establece la ordenación general de la formación profesional del sistema educativo, regula en su Capítulo II  el Procedimiento para las convalidaciones.</p>
          <p className="pb-3">Por todo ello, <b>os informamos a todas aquellas personas que deseen solicitar una convalidación que sea competencia del Ministerio de Educación que envíe la documentación en el plazo más breve de tiempo posible con el fin de comprobar la ausencia de errores y así poder iniciar el trámite lo antes posible.</b></p>
          <p className="pb-3">Las solicitudes de convalidaciones cuya resolución corresponden al director/a del centro docente donde esté matriculado el alumno se presentarán durante el mes de octubre.</p>
          <p className="pb-3 font-bold">Solo se podrá presentar una única solicitud de convalidación por curso académico.</p>
          <p className="pb-3 font-bold">ES MUY IMPORTANTE QUE TODA LA DOCUMENTACIÓN SEA CORRECTA Y ESTÉ COMPLETA.</p>
        </div>
        <Nav pos={2}/>
      </div>
      
    </div>
  );
}
    