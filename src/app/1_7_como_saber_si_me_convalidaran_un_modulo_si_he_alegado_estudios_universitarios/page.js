import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.7.- ¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>No se puede saber a priori.</p>
        <p className="pt-3">Por eso el Ministerio de Educación y Formación Profesional solicita los programas universitarios sellados: para poder analizar caso a caso y de forma individualizada cada convalidación.</p>
        <p className="pt-3">El Ministerio de Educación y Formación Profesional tiene en su página Web información sobre la convalidación de módulos profesionales aportando estudios universitarios. La podéis encontrar en este <Link href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" className="text-blue-600 font-bold underline">enlace</Link>.</p>
      </div>
      <div>
        <Nav pos={17} />
      </div>
    </div>
  );
}
    