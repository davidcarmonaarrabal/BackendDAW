import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.10.- Enlaces relacionados"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>Además de los enlaces que han ido apareciendo a lo largo de este documento, en estos enlaces encontrarás más información sobre las convalidaciones en la Formación Profesional:</p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>Información sobre <Link href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" className="text-blue-600 font-bold underline">convalidaciones en la página web de FP Andalucía.</Link></span>
        </p>
        <p className="flex items-start">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>Información sobre <Link href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" className="text-blue-600 font-bold underline">convalidaciones en la página web del Ministerio de Educación.</Link></span>
        </p>
        <p className="flex items-start">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><Link href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274" className="text-blue-600 font-bold underline">Normativa de apoyo</Link> para las convalidaciones en FP.</span>
        </p>
      </div>
      <div className="pt-6 w-[400px] flex justify-center mx-auto">
        <Image src="/web.png" alt="imagen fea" layout="responsive" width={30} height={60} className="border-black border-[3px]"></Image>
      </div>
      <div>
        <Nav pos={20} />
      </div>
    </div>
  );
}
    