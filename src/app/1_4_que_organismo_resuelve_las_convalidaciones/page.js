import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.4.- ¿Qué organismo resuelve las convalidaciones?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>Las convalidaciones recogidas expresamente en los <b>diferentes Anexos del <Link href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274" className="text-blue-600 font-bold underline">RD 1085/2020, de 9 de diciembre</Link></b> las resuelve la dirección del centro donde esté matriculado el alumno/a. Se <b>resolverá negativamente aquellas solicitudes de su competencia que no aparezcan en los anexos anteriormente citados</b>.</p>
        <p className="pt-4">Aquellas solicitudes que acrediten para convalidar <b>una titulación universitaria o un título de FP1 o FP2</b> las resuelve el <b>Ministerio de Educación y Formación Profesional</b>. Estas últimas convalidaciones se envían al centro y se trasladan al Ministerio. <b><u>En ningún caso el alumnado podrá enviar directamente la solicitud de convalidación al Ministerio.</u></b></p>
      </div>
      <div>
        <Nav pos={14} />
      </div>
    </div>
  );
}
    