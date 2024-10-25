import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "1.1.2.- ¿Qué estudios puedo alegar?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>

      <div>

        <div>
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Para solicitar la convalidación de módulos profesionales de un ciclo formativo de FP <b>se pueden alegar enseñanzas</b> cursadas dentro <b>del Sistema Educativo</b> y Unidades de Competencia acreditadas. Por tanto, se puede aportar: </span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><b>Otros ciclos formativos</b> de Formación Profesional de grado medio o superior cursados con anterioridad.</li>
            <li><b>Enseñanzas universitarias</b>: diplomaturas, licenciaturas, grados.</li>
            <li>Las <b>antiguas enseñanzas de Formación Profesional</b> de primer y segundo grado (títulos de Técnico auxiliar y Técnico especialista).</li>
            <li>Ciclos formativos de <b>Enseñanzas deportivas</b> o de <b>Artes Plásticas y Diseño</b>.</li>
            <li>Certificaciones académicas Oficiales de idioma (del mismo idioma que se solicita la convalidación y de nivel idóneo).</li>
            <li>Unidades de Competencia acreditadas.</li>
          </ul>
        </div>
        
        <div className="pt-6">
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Las enseñanzas siguientes no se pueden alegar: </span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><b>Carnés profesionales y cursos de Formación Profesional para el empleo (FPO y FP continua)</b>, distintos de los que conducen a la obtención de un Certificado de profesionalidad y a la acreditación oficial de unidades de competencia.</li>
            <li><b>Cursos privados</b> realizados en academias y centros de formación que no imparten enseñanzas oficiales.</li>
            <li><b>Cursos propios impartidos en la Universidad</b>, que no sean másteres oficiales como los cursos de experto, cursos de especialización, ...</li>
            <li><b>Títulos propios no oficiales de universidad</b>.</li>
            <li><b>Certificados de idiomas no oficialmente aceptados</b>.</li>
            <li><b>Experiencia laboral</b>.</li>
            <li><b>Formación no formal</b>.</li>
            <li><b>Titulaciones extranjeras homologadas</b>.</li>
            <li><b>Títulos equivalentes LOGSE</b>.</li>
            <li><b>Formaciones de otros ministerios que tienen concedida por normativa la equivalencia general o específica</b>.</li>
          </ul>
        </div>

        <div className="pt-6">
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Los <b>módulos profesionales</b> que <b>hayan sido previamente convalidados no podrán ser alegados para convalidar.</b> Solo se puede alegar materias que hayan sido cursadas y superadas. Los títulos extranjeros homologados tampoco podrán ser causa de una nueva convalidación con otros módulos profesionales.</span>
          </p>
        </div>

        <div className="pt-6">
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Los <b>estudios que tengan concedida la equivalencia específica o genérica (aquí los tenéis)</b>, a efectos académicos y/o profesionales, con títulos de Formación Profesional <b>no podrán ser utilizados a su vez para la convalidación de sus módulos profesionales</b>; por tanto, quien haya superado la totalidad de un ciclo formativo LOGSE no podrá aportarlo para solicitar la convalidación de ningún módulo profesional del título LOE equivalente que lo sustituye. Las convalidaciones que aparecen recogidas en el anexo IV del Real Decreto que regula cada título están reservadas para quien no ha podido finalizar el ciclo formativo que se extingue y debe transitar al nuevo ciclo formativo equivalente, o para quien solicita dichas convalidaciones para un título diferente de aquel con el que se ha declarado la equivalencia.</span>
          </p>
        </div>

        <div className="pt-6">
          <p className="flex items-start">✓
            <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span>Haber cursado enseñanzas superiores no siempre da derecho a la convalidación de enseñanzas relacionadas, pero de menor nivel, aunque en ambas haya materias con nombres similares.</span>
          </p>
        </div>

        <div className="pt-6 w-[600px] flex justify-center mx-auto">
          <Image src="/claseFea.jpg" alt="imagen fea" layout="responsive" width={150} height={80} className="border-black border-[3px]"></Image>
        </div>
      </div>

      <Nav pos={4}/>
    </div>
  );
}
    