import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.- Solicitud de convalidaciones"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>

      <div className="bg-blue-200 mt-7 p-3 pl-6 pr-6 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">
        <p>Aquí encontrarás información acerca de cómo solicitar la convalidación de un módulo profesional y la exención del módulo de Formación en Centros de Trabajo.</p>
        <div className="w-[200px] flex justify-center mx-auto">
          <Image src="/balanza.png" alt="Tutor y alumno" layout="responsive" width={50} height={50}></Image>
        </div>
      </div>
      <div className="flex justify-end pr-10 pt-3">
          <Link href={"/"}>
            <button className="bg-blue-100 p-1 rounded-l-full font-bold hover:bg-blue-200 transition duration-200 mr-0.5 text-blue-900"> {'<<'} Anterior    </button>
          </Link>
          <Link href={"/1_1_convalidaciones_en_fp"}>
            <button className="bg-blue-100 p-1 rounded-r-full font-bold hover:bg-blue-200 transition duration-200 ml-0.5 text-blue-900">Siguiente {'>>'} </button>
          </Link>
      </div>
    </div>
  );
}
    