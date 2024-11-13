import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "1.5.- ¿Qué documentación debo enviar al centro?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>Debes presentar la solicitud de convalidación de módulos profesionales, acompañada de la documentación establecida correspondiente, en el centro. <b>En ningún caso puedes enviar por tu cuenta la solicitud al Ministerio.</b></p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Solicitud de convalidación</b> que encuentras en este <b>enlace (&quot;ver Impreso solicitud convalidación módulos profesionales&quot;)</b>. En ese documento es imprescindible que cumplimentes todos los apartados. En este enlace puedes consultar los módulos de cada ciclo impartido con <b>su nombre y el código exacto. Para ello, debes desplegar dentro de cada centro, el apartado "Módulos ofertados de este ciclo". Recuerda que el plazo para enviar la solicitud de convalidación concluye a finales de octubre</b>.</span>
        </p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Fotocopia del Documento Nacional de Identidad</b> (DNI) o fotocopia del Pasaporte o de la Tarjeta de Extranjero/a o del Permiso de Residencia (temporal o definitivo) o del Visado de Estudios.</span>
        </p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>Además, debe incluirse la siguiente documentación, <b>ya sea original o fotocopia compulsada</b> (recuerda que puedes compulsar un documento en cualquier Administración Pública que cuente con registro simplemente presentando la copia y enseñando el original):</span>
        </p>
        <p className="flex items-start"><ArrowBigRight className="ml-6"></ArrowBigRight>
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Certificación académica oficial expedida por el centro docente donde has cursado los estudios que alegas</b>. En el caso de estudios universitarios, es obligatorio presentar original o fotocopia compulsada de la certificación académica oficial, con indicación de las horas o créditos de cada materia superada.</span>
        </p>
        <p className="flex items-start"><ArrowBigRight className="ml-6"></ArrowBigRight>
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>En el caso de alegar un título que acredite la formación previa alegada, debes presentar el título oficial o resguardo de haberlo solicitado</b>. En el caso de que desees convalidar alegando haber cursado otro ciclo formativo, es suficiente con el certificado académico de notas y no es necesario que adjuntes también la copia del título o el resguardo de haberlo solicitado.</span>
        </p>
        <p className="flex items-start"><ArrowBigRight className="ml-6"></ArrowBigRight>
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>En el caso de alegar enseñanzas universitarias, además de la certificación académica oficial con indicación de las horas o créditos de cada materia superada, deberás presentar <u>los programas de las asignaturas que haya cursado sellados</u></b><u> (el sello debe ser original y no vale una fotocopia del programa en el que el sello no sea original) por el centro universitario</u>. Estos programas deben recoger la <b>duración y contenidos teóricos y prácticos estudiados</b>.</span>
        </p>
        <p className="flex items-start"><ArrowBigRight className="ml-6"></ArrowBigRight>
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>En el caso de alegar unidades de competencia oficialmente acreditadas, certificación oficial de la acreditación de la Unidad de Competencia o Certificado de profesionalidad expedido por la Administración Laboral competente, obtenido de acuerdo con lo establecido en el RD 34/2008, de 18 de enero</b>.</span>
        </p>
        <p className="pt-3"><b>Aunque ya se ha dicho anteriormente, se recuerda que <u>todos los documentos (excepto el DNI y el documento de la solicitud de convalidación) tienen que ser original o copia compulsada</u>. <u>También se recuerda que el centro no puede tramitar ante el Ministerio de Educación ninguna solicitud que no venga acompañada de la documentación establecida</u></b>.</p>
        <p className="pt-3"><b><u>El solicitante deberá estar matriculado en los módulos profesionales que solicita convalidar y haber satisfecho los derechos de matrícula en las enseñanzas para las cuales solicita la convalidación.</u></b></p>
        <p className="pt-3"><b>Las convalidaciones entre estudios universitarios y de Formación Profesional se podrán solicitar cuando estos últimos pertenezcan al espacio de la educación superior</b>. Además, el número de módulos profesionales de los ciclos de grado superior convalidados <b>no podrá superar el 60% de la totalidad de créditos ECTS</b> establecidos en el real decreto por el que se establece el título Técnico Superior y se fijan los aspectos básicos del currículo, siempre que se aporten <b>enseñanzas universitarias que estén relacionadas con el campo de conocimiento y exista similitud entre las competencias, conocimientos y resultados de aprendizaje.</b></p>
      </div>
      <div className="pt-6 w-[400px] flex justify-center mx-auto">
        <Image src="/carpeta.png" alt="imagen fea" layout="responsive" width={50} height={50} className="border-black border-[3px]"></Image>
      </div>
      <div>
        <Nav pos={15} />
      </div>
    </div>
  );
}
