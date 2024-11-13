import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import { File } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "2.1.- Solicitud"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-6">
        <p>Para solicitar el título <b>deberás dirigirte al Centro docente donde finalizaste los estudios</b> conducentes a la obtención del título solicitado. Debe ser solicitados por los alumnos, previo pago de las tasas correspondientes.</p>
        <p className="pt-3">Debes cumplimentar e imprimir el modelo 046 de autoliquidación de tasas de la Junta de Andalucía disponible en el siguiente enlace: <Link href="https://www.juntadeandalucia.es/economiayhacienda/apl/surweb/modelos/modelo046/046.jsp" className="text-blue-600 font-bold underline">Modelo 046</Link>. En el apartado OBLIGADO AL PAGO, se deben cumplimentar los datos personales y de domiciliación del solicitante. En el apartado DATOS GENERALES, se debe marcar la casilla AUTOLIQUIDACIÓN. En el cuadro de texto situado debajo se indica el título que se solicita. Se escribirá la fecha en la que se va a realizar y la liquidación. En el código territorial pueden utilizarse los desplegables y seleccionar en código órgano territorial CONSEJERÍA DE EDUCACIÓN Y DEPORTE, en   Código provincia, la provincia donde se localice el centro y en Código centro, seleccionamos el centro donde superé el último módulo. En concepto de pago se indicará el código 0049 o bien se utilizará el desplegable y se seleccionará TASA POR EXPEDICIÓN DE TÍTULOS ACADÉMICOS Y PROFESIONALES.</p>
        <p className="pt-3">Se valida el documento, y nos da la opción de imprimirlo para presentarlo en la entidad bancaria y pagar o bien realizar el pago telemático. El pago telemático requiere tener certificado digital.</p>
        <p className="pt-3">El resto del documento será impreso mecánicamente por la entidad bancaria en el momento de realizar el ingreso si se opta por la impresión y presentación en la oficina bancaria.</p>
        <p className="pt-3">Una vez realizado el pago, la entidad bancaria se queda con una de las copias del modelo (el talón de cargo); le entregará al solicitante el ejemplar para el interesado y el ejemplar para la Administración. El ejemplar para la Administración se lo quedará el centro docente.  El ejemplar para el interesado se lo devolverá el centro sellado,  sirviéndole de resguardo de solicitud.</p>
        <p className="pt-3">Se remitirá al centro docente por correo postal (preferiblemente certificado con acuse de recibo) la siguiente documentación:</p>
      </div>
      <div className="pt-3">
        <p className="flex items-start">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Fotocopia DNI por ambas caras.</b></span>
        </p>
        <p className="flex flex-col items-start md:flex-row">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Impreso de solicitud cumplimentado.</b> <Link href="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/impreso_solicitud_titulo.pdf" className="text-blue-600 font-bold underline"><File></File> Descargar impreso de solicitud <span className="text-xs">(27155 B)</span></Link></span>
        </p>
        <p className="flex items-start">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span><b>Impreso 046</b> (se debe enviar el <b>ejemplar para la administración</b> y también el <b>ejemplar para el interesado</b>, que se devolverá sellado por el centro como resguardo del título).</span>
        </p>
      </div>
      <div className="bg-blue-200 mt-10 p-3 pl-6 pr-6 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] ml-6 mr-6">
        <p>Si deseas recibir la certificación académica con todas las calificaciones obtenidas en el ciclo, has de comunicarlo cuando envíes todos los documentos al centro.</p>
        <p className="pt-3">Ten en cuenta que la cantidad a ingresar la indica la Ley de Presupuesto de la Comunidad Autónoma de Andalucía que esté en vigor. Pregunta a tu tutor/a el importe que has de abonar teniendo en cuenta que los decimales has de escribirlos empleando la coma.</p>
      </div>
      <div>
        <Nav pos={22} />
      </div>
    </div>
  );
}
