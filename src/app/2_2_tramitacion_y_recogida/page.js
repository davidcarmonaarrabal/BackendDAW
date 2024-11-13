import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "2.2.- Tramitación y recogida"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="flex flex-col items-start md:flex-row pt-6">
        <div className="w-[80%]">
          <p>Cuando el centro en el que pides el título reciba la documentación, te devolverá el resguardo indicando que el título se encuentra en trámite. Resguardo que deberás guardar junto con el ejemplar para el interesado del impreso 046 hasta la llegada del título. Este puede tardar varios años en llegar al centro, será entonces cuando se te comunicará por correo que ya puedes recogerlo (también podrás recibirlo a través de las Delegaciones Territoriales).</p>
        </div>
        <div className="w[100px]">
          <Image src="/ninia.png" alt="Tutor y alumno" layout="responsive" width={50} height={50}></Image>
        </div>
      </div>
      <div className="bg-blue-200 mt-10 p-3 pl-6 pr-6 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] ml-6 mr-6">
        <p>Puedes encontrar más información al respecto:</p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>En el artículo 7 de la <Link href="https://www.juntadeandalucia.es/boja/1996/67/50" className="text-blue-600 font-bold underline">ORDEN de 21 de mayo de 1996, por la que se regulan el procedimiento de expedición y la organización y funcionamiento del Registro de los títulos académicos y profesionales correspondientes a las enseñanzas establecidas por la Ley Orgánica 1/1990, de 3 de octubre, de Ordenación General del Sistema Educativo</Link> y</span>
        </p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>En el <Link href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-342" className="text-blue-600 font-bold underline">Real Decreto 700/2019, de 29 de noviembre, por el que se modifica el Real Decreto 1850/2009, de 4 de diciembre, sobre expedición de títulos académicos y profesionales correspondientes a las enseñanzas establecidas por la Ley Orgánica 2/2006, de 3 de mayo, de Educación, para fijar el formato, el contenido y el soporte documental del Suplemento Europeo al Título de las Enseñanzas Artísticas.</Link></span>
        </p>
      </div>
      <div>
        <Nav pos={23} />
      </div>
    </div>
  );
}
