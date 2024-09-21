export default function Contato() {
    return(
        <>
            {/* <h1>Contato</h1> */}
            <form className="
                flex flex-col gap-4 items-center justify-center
                container mx-auto
                p-5
                text-corLetraFooter text-sm
            ">
                <input type="text" id="nome" placeholder="Nome Completo" className="w-3/12 p-1 rounded-xl"/>
                <input type="email" id="email" placeholder="Email" className="w-3/12 p-1 rounded-xl"/>
                <input type="tel" id="telefone" placeholder="N° de Celular" className="w-3/12 p-1 rounded-xl"/>
                <textarea id="mensagem" cols={4} rows={4} placeholder="Mensagem" className="w-3/12 p-1 resize-none rounded-xl"></textarea>
                <button type="button" className="w-24 h-8 bg-azulPrincipal text-white rounded-md">Enviar</button>
            </form>
        </>
    )
}