import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "2.- Solicitud del título *"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div>
        <Nav pos={21} />
      </div>
    </div>
  );
}
    