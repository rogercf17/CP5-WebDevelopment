import ImageHero from "../assets/images/image-hero.png"
import Footer from "../componentes/Footer"

export default function Home() {
    return(
        <>
            <section className="
                w-11/12 h-fit
                flex justify-center gap-52
            ">
                <div className="text-white space-y-4 p-5">
                    <div className="flex items-center gap-2 font-bold text-4xl text-azulPrincipal">
                        <span className="animate-spin">😊</span>
                        <h2 className="font-bold text-4xl text-azulPrincipal"> Olá, eu sou o Roger</h2>
                    </div>
                    
                    <h3 className="text-2xl">Texto que some e aparece</h3>
                    <button className="w-32 h-8 bg-azulPrincipal p-2 text-sm">Download CV</button>
                </div>
                <div>
                    <img src={ImageHero} alt="Imagem do Hero" className="h-72 w-72"/>
                </div>
            </section>
            <Footer />
        </>
    )
}