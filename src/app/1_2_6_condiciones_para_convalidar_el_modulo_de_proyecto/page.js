import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.2.6.- Condiciones para convalidar el módulo de proyecto"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>El módulo profesional de Proyecto correspondiente a títulos de Formación profesional de grado superior no podrá ser objeto de convalidación ni de exención en ningún caso.</p>
      </div>
      <div>
        <Nav pos={11} />
      </div>
    </div>
  );
}
    