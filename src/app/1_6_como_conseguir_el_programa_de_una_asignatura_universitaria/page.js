import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.6.- ¿Cómo conseguir el programa de una asignatura universitaria?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>Las convalidaciones <b>basadas en una o varias asignaturas universitarias no se resuelven en el centro, solo se reciben y envían al Ministerio para su resolución</b>. La experiencia nos dice que debes respetar los requisitos establecidos por el Ministerio.</p>
        <p className="pt-3">Además de la certificación académica oficial, el <b>Ministerio exige que presentes los programas de las asignaturas sellados originalmente por la universidad. Este último requisito es indispensable. En caso de que no se envíen los programas sellados, no se podrá enviar la solicitud de convalidación. No importa si presentas el título universitario y el certificado:</b> sin programas sellados no hay convalidación.</p>
        <p>¿Cómo conseguir los programas sellados? Es posible que hayas perdido los programas de cuando estudiaste en la Universidad, o si los tienes que no estén sellados, o en el peor de los casos, que ya no vivas ni siquiera donde estudiaste y no puedas desplazarte. Por eso no hay problema, siempre que tengas un poco de paciencia y quieras hacer lo que te proponemos, es muy probable que los consigas y puedas presentar tu solicitud de convalidación acompañada de los programas.</p>
        <p>Para ello, sigue los siguientes pasos:</p>
        <div>
          <p className="flex items-start pt-3">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Haz una lista de las asignaturas relacionadas con el módulo que quieres convalidar.</span>
          </p>
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Selecciona los departamentos responsables de esas asignaturas.</span>
          </p>
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Entra en la web de la Universidad en la que estudiaste y busca los departamentos del apartado anterior. Localiza el teléfono del jefe/director del departamento y la dirección de correo.</span>
          </p>
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Contacta por teléfono con el departamento y/o envía un correo con la siguiente información:</span>
          </p>
        </div>
        <div>
          <i>
            <p className="pt-3">Buenos días.</p>
            <p className="pt-3">Mi nombre es XXXX. Cursé la licenciatura/diplomatura/grado en XXX en la Facultad de XXXX Promoción 20XX-20XX y actualmente curso otros estudios para los que necesito el programa <b><u>sellado</u></b> por el centro universitario en cuestión de las siguientes asignaturas:</p>
            <p className="pt-3">XXXXX. curso, 20XX-20XX</p>
            <p className="pt-3">XXXXX. curso, 20XX-20XX</p>
            <p className="pt-3">Les agradecería si me pudiesen decir cómo conseguirlo o si me lo pudiesen enviar a la siguiente dirección: XXXX</p>
            <p className="pt-3">De no ser así, dígame cómo puedo hacerlo.</p>
            <p className="pt-3">De nuevo, gracias por su amabilidad.</p>
            <p className="pt-3">Saludos cordiales.</p>
          </i>
        </div>
      </div>
      <div>
        <Nav pos={16} />
      </div>
    </div>
  );
}
