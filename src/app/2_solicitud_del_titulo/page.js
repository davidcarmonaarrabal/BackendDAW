import Image from "next/image";

export const metadata = {
  title: "Mondongo"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div>
        <Nav pos={4} />
      </div>
    </div>
  );
}
    