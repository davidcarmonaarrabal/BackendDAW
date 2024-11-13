import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.1.1.- ¿Qué necesito para poder convalidar?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>

      <div className="bg-blue-200 mt-10 p-3 pl-6 pr-6 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] ml-6 mr-6">
        <p className="pb-3">La primera condición:</p>
        <p className="pb-3 flex items-start"> ✓
          <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span className="w-[100%]">Si eres alumno de SEMI o distancia: <b>estar matriculado/a en el módulo que se desea convalidar</b> y realizar el pago de las tasas correspondientes. Hasta que no se realice y se compruebe el pago, no se podrá ejecutar la convalidación en el expediente. De esta forma, si el pago se retrasa cabría la posibilidad de que la resolución de la convalidación también se retrasara.</span>
        </p>
        <p className="pb-3">La <b>convalidación no se realiza sobre la globalidad del Título</b> que se está cursando, sino sobre los módulos que se soliciten, si estos cumplen las condiciones para ello.</p>
      </div>
      <Nav pos={3}></Nav>
    </div>
  );
}
    