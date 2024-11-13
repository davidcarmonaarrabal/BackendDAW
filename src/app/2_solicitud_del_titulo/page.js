import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "2.- Solicitud del título"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="bg-blue-200 mt-7 p-3 pl-6 pr-6 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] ml-6 mr-6">
        <p>Aquí encontrarás los pasos a seguir para solicitar el título del ciclo una vez hayas superado todos los módulos formativos que lo conforman.</p>
        <div className="w-[300px] flex justify-center mx-auto">
          <Image src="/diploma.png" alt="Tutor y alumno" layout="responsive" width={50} height={50}></Image>
        </div>
      </div>
      <div>
        <Nav pos={21} />
      </div>
    </div>
  );
}
    