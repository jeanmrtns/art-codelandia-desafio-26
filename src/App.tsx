import {Header} from "./components/Header";
import {Button} from "./components/Button";
import PaintingWall from "./assets/painting_wall.svg";
import Img1 from "./assets/img1.svg";
import Img2 from "./assets/img2.svg";
import Img3 from "./assets/img3.svg";
import {Footer} from "./components/Footer";

export function App() {
  return (
      <main className="container mx-auto px-4 py-10 ">
        <Header />

        <section className="mt-24 block md:flex md:items-center md:justify-between">
            <div className="flex flex-col">
                <div className="md:w-full">
                    <h2 className="font-semibold text-4xl text-zinc-900" >Descubra novos artistas e suas obras</h2>
                    <p className="text-zinc-600 text-2xl mt-4 mb-10">Uma nova geração de jovens artistas surgem</p>
                    <Button>Explorar</Button>
                </div>

                <div className="flex items-center gap-10 md:mt-16 mt-4">
                    <p className="flex flex-col items-center">
                        <strong className="text-3xl">+2 mil</strong>
                        <span className="text-sm text-zinc-900">Artistas</span>
                    </p>
                    <p className="flex flex-col items-center">
                        <strong className="text-3xl">+7 mil</strong>
                        <span className="text-sm text-zinc-900">Vendas</span>
                    </p>
                    <p className="flex flex-col items-center">
                        <strong className="text-3xl">+16 mil</strong>
                        <span className="text-sm text-zinc-900">Avaliações</span>
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:gap-20 gap-4 md:mt-64 mt-12 w-full">
                    <img src={Img1} alt="" className="w-full"/>
                    <img src={Img2} alt="" className="w-full"/>
                    <img src={Img3} alt="" className="w-full"/>
                </div>
            </div>
            
            <div className="flex flex-col items-start justify-start">
                <img src={PaintingWall} alt="Mulher ruiva pintando um retrato de uma personagem sobre uma parede" className="hidden md:block md:w-full" />
                <div className="flex flex-col items-start justify-center md:mt-24 mt-4">
                    <h2 className="text-3xl md:text-4xl mb-2.5 font-semibold">Confira as últimas coleções</h2>
                    <Button type="button">
                        Ver mais
                    </Button>
                </div>
            </div>
        </section>

          <section className="md:mt-24 mt-12">
              <h2 className="text-5xl md:mb-10 mb-4">Artistas</h2>
              <div className="flex flex-col items-center gap-4 md:justify-between justify-center md:flex-row w-full">
                <div className="bg-[url('./assets/sabine.svg')] md:h-[484px] h-[512px] md:w-[396px] relative w-full bg-no-repeat bg-cover">
                    <div className="absolute top-4 left-4">
                        <h4 className="text-zinc-50 text-3xl">Sabine Lowe</h4>
                        <p className="text-zinc-50 opacity-80 mt-2">Design e Fotógrafa</p>
                    </div>
                </div>
                  <div className="bg-[url('./assets/eleanor.svg')] md:h-[484px] h-[512px] md:w-[396px] relative w-full bg-no-repeat bg-cover">
                      <div className="absolute top-4 left-4">
                          <h4 className="text-zinc-50 text-3xl">Eleanor Pena</h4>
                          <p className="text-zinc-50 opacity-80 mt-2">Escritora e Design</p>
                      </div>
                  </div>
                  <div className="bg-[url('./assets/leslie.svg')] md:h-[484px] h-[512px] md:w-[396px] relative w-full bg-no-repeat bg-cover">
                      <div className="absolute top-4 left-4">
                          <h4 className="text-zinc-50 text-3xl">Leslie Alexander</h4>
                          <p className="text-zinc-50 opacity-80 mt-2">Diretora de arte</p>
                      </div>
                  </div>
              </div>

          </section>
          <Footer />
      </main>
  );
}

