import Roger from "../assets/images/Minha-foto.png"
import CardSkills from "../componentes/CardSkills";

export default function Sobre() {
  return (
    <section className="
        w-11/12 h-fit
        flex flex-col justify-center items-center gap-8
        mb-10
    ">
        <div className="flex justify-center justify-evenly items-center">
          <img src={Roger} alt="Minha Foto" className="w-80 h-80 rounded-full" />
          <p className=" text-white text-md text-justify w-1/4 font-normal tracking-wider first-letter:text-3xl">
              Olá meu nome é Roger Cardoso Ferreira, tenho 19 anos e sou Engenheiro de Software. 
              Atualmente morando no bairro Jardim Grimaldi em São Paulo. Conclui meu ensino médio 
              integrado com o técnico em Análise de Desenvolvimentos de Sistemas na Etec Professor
              Camargo Aranha em 2020 e Agora estou cursando Engenharia de Software na FIAP.
              Gosto de musculação, jogar bola, tocar violão, aprender coisas novas e passar o tempo livre
              com meus amigos e familiares.
          </p>
        </div>
        <CardSkills />
    </section>
  );
}
