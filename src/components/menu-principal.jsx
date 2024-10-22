import Link from "next/link";

const menu = [
    "Información general: convalidaciones, exenciones y títulos",
    "1.- Solicitud de convalidaciones",
    "1.1.- Convalidaciones en FP",
    "1.1.1.- ¿Qué necesito para poder convalidar?",
    "1.1.2.- ¿Qué estudios puedo alegar?",
    "1.2.- ¿Dónde encontrar qué módulos son convalidables?",
    "1.2.1-. Condiciones para convalidar FOL",
    "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora",
    "1.2.3.- Condiciones para convalidar Inglés",
    "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera",
    "1.2.5.- Condiciones para convalidar las Horas de Libre Configuración",
    "1.2.6.- Condiciones para convalidar el módulo de Proyecto",
    "1.2.7.- Exención de la FCT",
    "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?",
    "1.4.- ¿Qué organismo resuelve las convalidaciones?",
    "1.5.- ¿Qué documentación debo enviar al centro?",
    "1.6.- ¿Cómo conseguir el programa de una asignatura universitaria?",
    "1.7.- ¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?",
    "1.8.- ¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?",
    "1.9.- ¿Qué efectos tendrá la convalidación en mi expediente?",
    "1.10.- Enlaces relacionados",
    "2.- Solicitud del título",
    "2.1.- Solicitud",
    "2.2.- Tramitación y recogida",
    "Historial de versiones"
];

function slug(texto){
    return (
        texto.toLowerCase()
        .replace( /[:,?¿]/g, "")
        .replace("- ", "")
        .replace(/[. ]/g, "_")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    )
}

const classLink = "underline text-blue-700 block bg-blue-50 p-2 rounded-md mb-1";

function MenuPrincipal() {
    

    return ( 
        <div className="w-[300px] bg-blue-200 border border-blue-500 p-3 max-h-[100vh] overflow-y-auto">
            <Link className={classLink} href={ slug(menu[0])}> { menu[0] } </Link>
            <Link className={classLink} href={ slug(menu[1])}> { menu[1] } </Link>
            <Link className={classLink} href={ slug(menu[2])}> { menu[2] } </Link>
            <Link className={classLink} href={ slug(menu[3])}> { menu[3] } </Link>
            <Link className={classLink} href={ slug(menu[4])}> { menu[4] } </Link>
            <Link className={classLink} href={ slug(menu[5])}> { menu[5] } </Link>
            <Link className={classLink} href={ slug(menu[6])}> { menu[6] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[7] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[8] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[9] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[10] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[11] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[12] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[13] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[14] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[15] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[16] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[17] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[18] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[19] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[20] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[21] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[22] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[23] } </Link>
            <Link className={classLink} href={ slug(menu[7])}> { menu[24] } </Link>
        </div>
     );
}

export default MenuPrincipal;