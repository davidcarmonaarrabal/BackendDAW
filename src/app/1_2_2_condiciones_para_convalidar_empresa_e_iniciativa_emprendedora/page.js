import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>Para poder convalidar el módulo de <b>Empresa e Iniciativa Emprendedora</b> es necesario acreditar alguna de las siguientes condiciones:</p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>Tener <b>aprobado el módulo de Empresa e Iniciativa Emprendedora de otro ciclo formativo</b>, cualquiera que sea el grado, incluso en grados cruzados -medio o superior-.</span>
        </p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>Tener <b>aprobado el módulo de Administración, gestión y comercialización en la pequeña empresa</b> (o con una denominación similar).</span>
        </p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Poseer el Título de Técnico en Gestión administrativa o Técnico superior en Administración y finanzas</b>.</span>
        </p>
      </div>
      <div className="pt-4 flex justify-center pr-16 pl-16">
        <table className="border-separate">
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Módulo a convalidar</td>
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center">Formación a aportar</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="15">Empresa e Iniciativa Emprendedora. (Cualquier ciclo formativo)</td>
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Administración, gestión y comercialización en la pequeña empresa.</li>
                <li>(Cualquier ciclo formativo).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Administración y gestión de un pequeño establecimiento comercial.</li>
                <li>Ciclo Comercio. (Comercio y Marketing)</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Organización y gestión de una explotación agraria familiar.</li>
                <li> Ciclo Trabajos Forestales y de Conservación del Medio Natural. (RD 1713/1996, de 12 de julio). (Agraria).</li>
                <li>Ciclo Jardinería. (RD 1714/1996, de 12 de julio). (Agraria).</li>
                <li>Ciclo Explotaciones Agrarias Extensivas. (RD 1715/1996, de 12 de julio) (Agraria).</li>
                <li>Ciclo Explotaciones Agrícolas Intensivas. (RD 1716/1996, de 12 de julio). (Agraria).</li>
                <li>Ciclo Explotaciones Ganaderas. (RD 1717/1996, de 12 de julio).  (Agraria)</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">Ciclo completo de Gestión administrativa. (RD 1662/1994, de 22 de julio). (Administración y Gestión).</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Administración, gestión y comercialización en la pequeña empresa.</li>
                <li>(Cualquier ciclo formativo).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Organización y gestión de una pequeña empresa de actividades de tiempo libre y socioeducativas.</li>
                <li>Ciclo Animación Sociocultural. (Servicios Socioculturales y a la Comunidad).</li>
                <li>Ciclo Animación de Actividades Físicas y Deportivas. (Actividades Físicas y Deportivas).</li>
                <li>Ciclo Animación Turística. (Hostelería y Turismo).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Organización y control en agencias de viajes.</li>
                <li>Ciclo Agencias de Viajes. (Hostelería y Turismo).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Administración de establecimientos de restauración.</li>
                <li>Ciclo Restauración. (Hostelería y Turismo).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Administración y gestión de una unidad/gabinete de Ortoprotésica.</li>
                <li>Ciclo Ortoprotésica. (Sanidad).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Organización, administración y gestión de una unidad/gabinete de prótesis dentales.</li>
                <li>Ciclo Prótesis Dentales. (Sanidad).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Administración y gestión de un gabinete audioprotésico.</li>
                <li>Ciclo Audioprótesis. (Sanidad).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Organización y gestión de una empresa agraria.</li>
                <li>Ciclo Gestión y Organización de los Recursos Naturales y Paisajísticos. (Agraria) Ciclo Gestión y Organización de Empresas Agropecuarias. (Agraria).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Ciclo completo de Administración y finanzas.</li>
                <li>(RD 1659/1994, de 22 de julio). (Administración y Gestión).</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">Técnico en Gestión Administrativa LOE.  Ciclo completo</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Técnico en Superior en Administración y Finanzas LOE.</li>
                <li>Ciclo completo.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="1">0402. Empresa e iniciativa emprendedora.</td>
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Gestión económico-administrativa en agencias de viajes.</li>
                <li>Organización y control en agencias de viajes.</li>
              </ul>
            </td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="1">0863. Empresa e iniciativa emprendedora.</td>
            <td className="border-gray-200 border-[1px] p-2">Organización, administración y gestión de una unidad/gabinete de prótesis dentales.</td>
          </tr>
          <tr className="hover:bg-blue-200 transition duration-100">
            <td className="bg-blue-200 p-1 font-bold border-blue-200 border-[1px] text-center" rowSpan="1">Empresa e Iniciativa Emprendedora. (Cualquier ciclo formativo LOE)</td>
            <td className="border-gray-200 border-[1px] p-2">
              <ul>
                <li>Empresa e Iniciativa Emprendedora.</li>
                <li>(Cualquier ciclo formativo LOE).</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <Nav pos={7} />
      </div>
    </div>
  );
}
