import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Historial de versiones"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <Titulo> {metadata.title} </Titulo>
      <div className="pt-6">
        <p><b>5.0 Actualización de enlaces en apartados 1.2, 1.27, 1.4, 1.5, 1.7, 1.10, 2.1 y 2.2. Actualización de texto en apartados: Introducción, 1.1, 1.1.1, 1.1.2, 1.2, 1.2.1, 1.2.2, 1.2.3,1.2.4, 1.2.7 (antiguo 1.2.6), 1.3, 1.4, 1.5, 1.7, 1.9, 2.1 y 2.2. Inclusión del apartado 1.2.6 que desplaza el antiguo a 1.2.7. Eliminación del apartado 1.8.1 (3/03/2022).</b></p>
        <p className="pt-3">4.0 Actualización de enlaces en apartados 1.1.2, 1.5 y 1.10 (11/09/2020).</p>
        <p className="pt-3">3.2. Modificación en el apartado 1.1. del plazo para recoger las solicitudes de convalidación. Revisión y restauración de enlaces (18/09/2019).</p>
        <p className="pt-3">3.1. Modificación párrafo en apartado "2.1 Solicitud", para la entrega al centro del modelo 046 (25/01/2019).</p>
        <p className="pt-3">3.0. Actualización del apartado "Convalidaciones en FP" ampliando la información al respecto en nuevos sub-apartados (10/10/2018).</p>
        <p className="pt-3">2.0. Actualización de apartado "Solicitud del título" y su demostración. Creación de una primera sección sobre las convalidaciones (12/06/2017).</p>
        <p className="pt-3">1.0. Versión inicial (16/04/2015). </p>
      </div>
      <div className="flex justify-end pr-10 pt-3">
        <Link href={"/2_2_tramitacion_y_recogida"}>
          <button className="bg-blue-100 p-1 rounded-l-full font-bold hover:bg-blue-200 transition duration-200 text-blue-900">{'<<'} Anterior </button>
        </Link>
      </div>
    </div>

  );
}
    