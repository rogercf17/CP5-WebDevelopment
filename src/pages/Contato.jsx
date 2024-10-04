import FormularioContato from "../componentes/FormularioContato"
import { FaRegEnvelope } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";


export default function Contato() {
    return(
        <section className="
            w-10/12 h-fit
            flex justify-center
        ">
            {/* <h1>Contato</h1> */}
            <FormularioContato /> 
            <div className="flex flex-col gap-5">
                <h2 className="text-4xl text-azulPrincipal font-bold">Vamos Conversar!</h2>
                <div>
                    <ul className="text-white text-sm flex flex-col gap-2">
                        <li className="flex items-center gap-2"> 
                            <BsGeoAlt className="text-corLetraFooter"/> São Paulo, SP, Brasil
                        </li>
                        <li className="flex items-center gap-2"> 
                            <FaRegEnvelope className="text-corLetraFooter"/> rogercf16@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FiPhone className="text-corLetraFooter"/> +55 11998451244
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}