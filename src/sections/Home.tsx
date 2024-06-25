import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export function Home() {
    return (
        <section className="relative h-screen max-h-[800px] w-full   bg-cover bg-center bg-no-repeat">
            <div className="primary-gradient absolute flex h-full w-full items-center justify-start">
                <Header />
                <Container className="flex gap-6 lg:pt-0 md:flex-row md:justify-between lg:gap-28 lg:pb-0">
                    <div className="flex w-full !max-w-[543px] flex-col justify-center gap-10 items-center lg:items-start">
                        <h1 className="text-4xl font-semibold text-white md:text-[60px] md:font-bold md:leading-[71px]">
                            <img
                                src="/assets/logos/logo-coicraft.png" alt="Logo coincraft"
                                width={506} height={120}
                                className=" w-[300px] h-[80px] object-contain lg:w-[506px] lg:h-[120px]"
                            />
                        </h1>
                        <p className="text-center block w-full max-w-[450px] text-lg font-medium text-white md:text-xl lg:text-start">
                            Descubra como poupar e tomar decisões financeiras inteligentes enquanto se diverte com desafios supreendentes.
                        </p>
                        <div className="flex w-full justify-center gap-2 lg:justify-start lg:gap-6">
                            <Button
                                variant="default"
                                className="w-full max-w-[280px] lg:w-[284px]"
                            >
                                <a href="#saiba-mais" className="uppercase">
                                    comece agora
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="-mb-[152px] lg:-mb-[242px]">
                        <img
                            src="/assets/hero.png"
                            alt="Hero Image"
                            width={633}
                            height={647}
                            className="w-[400px] h-[400px] object-contain lg:w-[633px] lg:h-[647px]"
                        />
                    </div>
                </Container>
            </div>
        </section>
    )
}
