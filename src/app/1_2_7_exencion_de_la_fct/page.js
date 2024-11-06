import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.2.7.- Exención de la FCT"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>El módulo profesional de Formación en Centros de Trabajo nunca será susceptible de convalidación, sino de exención total o parcial. Se podrá calificar como exento por correspondencia total o parcial con la experiencia laboral demostrable relacionada con los estudios profesionales respectivos. Para ello se requiere la matriculación previa del alumno en el módulo.</p>
        <p className="pt-4">Se debe acreditar, tanto para la exención total como para la parcial, una experiencia laboral equivalente al trabajo a tiempo completo de, al menos, un año, que permita demostrar que la persona solicitante tiene adquiridos los resultados de aprendizaje del módulo profesional de formación en centros de trabajo. En el caso de contratos a tiempo parcial, los días de cotización deberán ser equivalentes a un año a tiempo completo.</p>
        <p className="pt-4">Para solicitar la exención de la FCT <b>deberás enviar por correo certificado, y preferiblemente con acuse de recibo, a la atención de la Dirección de tu centro</b> lo siguiente:</p>
        <p className="flex items-start"> ✓
          <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Anexo I</b> (solicitud de exención) de la Orden de 28 de septiembre de 2011, por la que se regulan los módulos profesionales de formación en centros de trabajo y de proyecto para el alumnado matriculado en centros docentes de la Comunidad Autónoma de Andalucía. <Link href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" className="underline text-blue-700 hover:text-blue-800">Puedes obtener aquí el impreso solicitud exención FCT</Link>.</span>
        </p>
        <p className="flex items-start"> ✓
          <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Documentación acreditativa</b> que justifique la experiencia laboral.</span>
        </p>
      </div>
      <div className="bg-blue-200 mt-10 p-3 pl-6 pr-6 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
        <p className="pb-3 font-bold">Información sobre la exención de la FCT:</p>
        <p className="flex items-start"> ✓
          <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>Apartado &quot;¿Cómo se solicita la exención del módulo profesional de Formación en Centros de Trabajo (FCT)?&quot;, en el siguiente enlace:</span> 
        </p>
        <p className="ml-4"><Link href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" className="underline text-blue-700 hover:text-blue-800">Convalidaciones entre módulos profesionales</Link>.</p>
      </div>
      <div>
        <Nav pos={12} />
      </div>
    </div>
  );
}
    