import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export const Solution = () => {
    return (
        <section className='w-full primary-gradient'>
            <Container className="lg:gap-12 gap-5 md:gap-8 sm:gap-4 items-center" id={'content'}>
                <div className="flex items-center flex-col gap-5 md:gap-8 lg:gap-12 lg:flex-row">
                    <img
                        src='/assets/hero-1.png'
                        alt="Imagem 1"
                        width="450"
                        height="236"
                        className="max-w-full h-auto rounded-lg"
                    />
                    <div className="flex flex-col items-center lg:items-start gap-2.5 text-white">
                        <h1 className="font-sans font-semibold text-left text-3xl md:text-4xl lg:text-5xl tracking-tight">POUPE E INVISTA!</h1>
                        <h2 className="font-sans font-normal text-left text-2xl md:text-3xl lg:text-4xl tracking-tight">Explore Missões Financeiras</h2>
                        <p className="text-center md:text-left text-base md:text-lg lg:text-xl max-w-sm mx-auto">Desafie-se com missões interativas que tornam a educação financeira uma jornada divertida e envolvente!</p>
                        <Button variant='outline' className='uppercase'>
                            explorar
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 md:gap-8 lg:gap-12 lg:flex-row">
                    <div className="flex flex-col items-center lg:items-end text-right gap-2.5 text-white">
                        <h1 className="font-sans font-semibold text-right text-3xl md:text-4xl lg:text-5xl tracking-tight">JOGUE E APRENDA!</h1>
                        <h2 className="font-sans font-normal text-right text-2xl md:text-3xl lg:text-4xl tracking-tight">Teste Seus Conhecimentos</h2>
                        <p className="text-center md:text-right text-base md:text-lg lg:text-xl max-w-sm mx-auto">Participe de quizzes divertidos que testam e expandem seu conhecimento financeiro.</p>

                        <Button variant='outline' className='uppercase'>
                            saiba mais
                        </Button>
                    </div>
                    <img
                        src='/assets/hero-2.png'
                        alt="Imagem 2"
                        width="450"
                        height="236"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
            </Container>
        </section>
    );
};
