import Link from "next/link";
import { menu,slug } from "@/lib/utils";

function Nav( {pos} ) {
    return (
        <div className="flex justify-end pr-10 pt-3">
            <Link href={ slug(menu[pos-1]) }>
                <button className="bg-blue-100 p-1 rounded-l-full font-bold hover:bg-blue-200 transition duration-200 mr-0.5 text-blue-900"> {'<<'} Anterior    </button>
            </Link>
            <Link href={ slug(menu[pos+1])}>
                <button className="bg-blue-100 p-1 rounded-r-full font-bold hover:bg-blue-200 transition duration-200 ml-0.5 text-blue-900">Siguiente {'>>'} </button>
            </Link>
        </div>
    );
}

export default Nav;