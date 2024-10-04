import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return(
        <footer className="
            w-screen h-36 
            space-y-1
            text-corLetraFooter 
            text-center fixed bottom-0 flex flex-col justify-center
            mt-5
        ">
            <hr className="w-3/4 
            self-center
            border-corLetraFooter border-t-2
            "></hr>
            <div className="flex gap-4 justify-center pt-1">
                <a href="#" className="transition-all duration-500 hover:text-azulPrincipal">
                    <FaInstagram size={21}/>
                </a>
                <a href="#" className="transition-all duration-500 hover:text-azulPrincipal">
                    <FaGithub size={21}/>
                </a>
                <a href="#" className="transition-all duration-500 hover:text-azulPrincipal">
                    <FaLinkedin size={21}/>
                </a>
            </div>
            <h2 className="text-2xl pb-4">Me siga nas redes sociais</h2>
            <h4 className="text-xs">©2024 React & Tailwind CSS Portfolio. Roger Cardoso Ferreira</h4>
        </footer>
    )
}