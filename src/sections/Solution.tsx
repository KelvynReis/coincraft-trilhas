import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export const Solution = () => {
    return (
        <section className='w-full primary-gradient'>
            <Container className="lg:gap-12 gap-5 md:gap-8 sm:gap-4 items-center" id={'content'}>
                <div className="flex items-center flex-col gap-5 md:gap-8 lg:gap-12 lg:flex-row">
                    <img
                        src='/assets/img-gamer.png'
                        alt="Imagem do jogo, tela de derrota"
                        width="450"
                        height="236"
                        className="max-w-full h-auto rounded-lg"
                    />
                    <div className="flex flex-col items-center lg:items-start gap-2.5 text-white">
                        <h2 className="font-sans font-semibold text-left text-3xl md:text-4xl lg:text-5xl tracking-tight">EXPLORE E RESISTA!</h2>
                        <p className="text-center md:text-left text-base md:text-lg lg:text-xl max-w-sm ">Desafie-se em missões perigosas, derrote os slimes inimigos e e conquiste seu caminho rumo ao topo!</p>
                        <Button variant='outline' className='uppercase'>
                            explorar
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 md:gap-8 lg:gap-12 lg:flex-row">
                    <div className="flex flex-col items-center lg:items-end text-right gap-2.5 text-white">
                        <h2 className="font-sans font-semibold text-right text-3xl md:text-4xl lg:text-5xl tracking-tight">JOGUE E APRENDA!</h2>
                        <p className="text-center md:text-right text-base md:text-lg lg:text-xl max-w-sm ">Responda às perguntas do Mago dentro do tempo estipulado para testar seu conhecimento financeiro e avançar de nível.</p>

                        <Button variant='outline' className='uppercase'>
                            saiba mais
                        </Button>
                    </div>
                    <img
                        src='/assets/img-gamer-2.png'
                        alt="imagem do jogo"
                        width="450"
                        height="236"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
            </Container>
        </section>
    );
};
