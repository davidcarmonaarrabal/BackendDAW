import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "1.8.- ¿Cuando tendré noticias sobre si se ha aprobado la convalidación?"
};

export default function Home() {
  return (
    <div className="pl-6 pt-4 pr-10">
      <header>
        <Titulo> {metadata.title} </Titulo>
      </header>
      <div className="pt-9">
        <p className="flex items-start">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>En primer lugar, hay que recordar que <b>solo se pueden convalidar módulos en los que estás debidamente matriculado. La matrícula solo se da por finalizada cuando concluya el pago de las tasas</b>. Por tanto, hasta que el centro no tenga constancia del pago, no se podrá proceder a reconocer la convalidación. De esta forma, si el pago se retrasa cabría la posibilidad de que la resolución de la convalidación también se retrasará.</span>
        </p>
        <p className="flex items-start pt-3">✓
          <i class="fas fa-check text-green-500 mt-1 mr-2"></i>
          <span>Si <b>la convalidación la debe resolver el Ministerio, el plazo se alarga más, ya que</b> no se puede remitir la documentación a ese organismo hasta tener la constancia del pago realizado. En los últimos años, la resolución del Ministerio ha llegado bien entrado el año nuevo. <b>Por eso es conveniente que presentes tu solicitud lo antes posible.</b> Una vez resuelta la convalidación, el Ministerio de Educación y Formación Profesional se pondrá directamente en contacto contigo, a través del correo electrónico que hayas facilitado en la solicitud de convalidación, para comunicarte el resultado y para que te descargues la resolución desde su Sede Electrónica. Si te han concedido la convalidación, deberás presentar la resolución en el centro para que la anoten en tu expediente académico. <b>Es en este momento, y no antes, cuando tienes formalmente el módulo convalidado.</b></span>
        </p>
        <p className="pt-3"><b>El Ministerio informa que se debe empezar a trabajar el módulo, con independencia de haber solicitado la convalidación, por si al llegar la resolución esta es negativa.  Durante el tiempo que el Ministerio informe al alumno/a de la resolución de la convalidación del módulo solicitado, es imprescindible que participe en las actividades a distancia (entrega de tareas, participación en foros, etc.) como obligación dentro del proceso de evaluación continua.</b></p>
      </div>
      <div className="pt-6 w-[400px] flex justify-center mx-auto">
        <Image src="/hoja.jpg" alt="imagen fea" layout="responsive" width={30} height={60} className="border-black border-[3px]"></Image>
      </div>
      <div>
        <Nav pos={18} />
      </div>
    </div>
  );
}
