import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.9.- ¿Que efectos tendrá la convalidación en mi expediente?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>Cada módulo profesional convalidado se recogerá en los documentos académicos, a efectos de cálculo de la nota media del ciclo formativo de Formación Profesional, con la calificación obtenida por el solicitante en el módulo profesional cursado que conste en la documentación académica correspondiente.</p>
        <p className="pt-3"><b>Los módulos profesionales convalidados con estudios universitarios, así como los que se convaliden aportando estudios anteriores a la LOGSE, unidades de competencia o certificación académica oficial de idioma no llevarán asignada ninguna puntuación</b>, constando en el expediente del alumnado como convalidado y no computarán a efectos de cálculo de la nota media del ciclo formativo.</p>
      </div>
      <div className="pt-6 w-[400px] flex justify-center mx-auto">
        <Image src="/notaA.png" alt="imagen fea" layout="responsive" width={60} height={60}></Image>
      </div>
      <div>
        <Nav pos={19} />
      </div>
    </div>
  );
}
    