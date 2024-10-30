import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.2.- ¿Dónde encontrar qué modulos son convalidables?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div>
        <div className="pt-6">
          <p>Son dos los documentos que debes consultar:</p>
          <p className="flex items-start pt-3">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Por un lado, los diferentes <b>Anexos del</b> <Link href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274" className="underline text-blue-700 hover:text-blue-800"><b>Real Decreto</b> 1085/2020, de 9 de diciembre, por el que se establecen convalidaciones de módulos profesionales de los títulos de Formación Profesional del sistema educativo español y las medidas para su aplicación, y se modifica el Real Decreto 1147/2011, de 29 de julio, por el que se establece la ordenación general de la formación profesional del sistema educativo.</Link> Aquí puedes consultar las tablas de convalidaciones del Real decreto 1085/2020, de 9 de diciembre (<Link href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones/normativa-de-apoyo.html" className="underline text-blue-700 hover:text-blue-800">tablas de convalidación</Link>).</span>
          </p>
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Por otro, el <b>Anexo IV del Real Decreto</b> que crea el título LOE que estás estudiando, ya que establece las convalidaciones con módulos LOGSE del mismo Ciclo. Quien haya superado la totalidad de un ciclo formativo LOGSE no podrá aportarlo para solicitar la convalidación de ningún módulo profesional del ciclo formativo LOE que lo sustituye. Estas convalidaciones están reservadas para quien transita a un ciclo formativo LOE desde un ciclo formativo LOGSE, sin haberlo finalizado ni obtenido el título.</span>
          </p>
          <p className="pt-3">Ten en cuenta que <b>los módulos profesionales con el mismo código y denominación</b> presentes en diferentes ciclos formativos LOE <b>son en realidad el mismo módulo profesional.</b> Estos módulos se denominan <b>transversales.</b> Si superas un módulo profesional transversal en un ciclo formativo, lo tendrás superado en cualquier otro del que también forme parte y <b>la calificación obtenida se traslada de un ciclo al otro sin necesidad de convalidación ni más trámite</b>.</p>
          <p className="pt-3">Los módulos profesionales de FOL y EIE tienen en todos los ciclos formativos LOE la misma denominación, pero diferentes códigos. Por tanto, no hay arrastre de calificación sino convalidación. Se deben cursar o convalidar de un ciclo formativo a otro (siempre que se cumplan los requerimientos para ello).</p>
          <p className="flex items-start pt-3">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>La convalidación del módulo FOL puedes consultarla en el siguiente enlace: <Link href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" className="underline text-blue-700 hover:text-blue-800">Convalidación de FOL</Link>.</span>
          </p>
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>La convalidación del módulo EIE puedes consultarla en el siguiente enlace: <Link href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" className="underline text-blue-700 hover:text-blue-800">Convalidación de EIE</Link>.</span>
          </p>
        </div>
        <div className="pt-6 w-[600px] flex justify-center mx-auto">
          <Image src="/pollotopeguapo.jpg" alt="pollotopeguapo" layout="responsive" width={150} height={80} className="border-black border-[3px]"></Image>
        </div>
        <Nav pos={5}/>
      </div>
    </div>
  );
}
