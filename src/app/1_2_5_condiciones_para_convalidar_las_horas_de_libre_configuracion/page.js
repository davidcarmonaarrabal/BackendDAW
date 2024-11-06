import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.2.5.- Condiciones para convalidar las horas de libre de configuración"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>El módulo profesional de <b>Horas de Libre Configuración no puede ser objeto de convalidación</b>.</p>
        <p className="pt-4">Este módulo profesional no se evalúa de manera independiente al estar asociado a otro módulo profesional a efectos de evaluación. Cuando un alumno o alumna obtiene la convalidación de este otro módulo profesional (o lo haya superado con anterioridad), queda exento de cursar el de Horas de Libre Configuración.</p>
      </div>
      <div>
        <Nav pos={10} />
      </div>
    </div>
  );
}
