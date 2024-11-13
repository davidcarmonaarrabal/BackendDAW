import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="flex">
        <div className="w-[70%]  pt-6">
          <p><b>Salvo el módulo de Formación en Centros de Trabajo</b> (las &quot;prácticas&quot;), <b>la respuesta es no</b>. En general, <b>no es posible convalidar un módulo acreditando experiencia laboral a través de un informe de vida laboral.</b></p>
          <p className="pt-4">Si alguna persona cree que con su experiencia profesional ha adquirido las competencias necesarias de un módulo concreto, debe acreditar la posesión de esas unidades de competencia bien mediante un <b>certificado de profesionalidad</b> o bien porque ha participado en un <Link href="https://todofp.es/acreditacion-de-competencias.html" className="text-blue-600 font-bold underline"> procedimiento de acreditación de competencias profesionales</Link> y así se lo han reconocido, <u>no a través de un certificado de vida laboral</u>. <b>Tampoco serán válidos los resguardos de haber solicitado el certificado de profesionalidad, los diplomas o certificados de asistencia expedidos por el centro o entidad de formación u otros documentos justificativos distintos de los indicados.</b> Estas convalidaciones se regulan en el anexo V.A del Real Decreto que crea el título que se está estudiando (en este anexo se indican las unidades de competencia que se adquieren al superar cada módulo profesional).</p>
          <p className="pt-4">Por tanto, <b>las unidades de competencia debidamente acreditadas pueden ser aportadas para solicitar la convalidación de módulos profesionales según lo regulado en el anexo V.A del Real Decreto</b> que regula cada título siempre que se aporte el <b>certificado de profesionalidad</b> o la <b>certificación oficial de la acreditación de la Unidad de Competencia.</b></p>
        </div>
        <div className="w-[300px] pt-44">
          <Image src="/Persona5.jpg" alt="Persona Trabajando" width="700" height="700" className="border-black border-[3px]"></Image>
        </div>
      </div>
      <div>
        <Nav pos={13} />
      </div>
    </div>
  );
}
