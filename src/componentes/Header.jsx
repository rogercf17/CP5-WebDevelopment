import { NavLink } from "react-router-dom";
import { LuSun } from "react-icons/lu";


export default function Header() {
    return(
        <>
            <nav className="w-screen h-36 text-white container mx-auto flex justify-center items-center text-center pr-3 gap-96">
                <h1 className="text-azulPrincipal text-4xl">
                    <NavLink to="/">RC.F</NavLink>
                </h1>
                <ul className="flex gap-20">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projetos">Projetos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato">Contato</NavLink>
                    </li>
                </ul>
                <div className="w-10 h-10 bg-azulPrincipal rounded-lg flex items-center justify-center">
                    <LuSun size={25}/>
                </div>
            </nav>
        </>
    )
}