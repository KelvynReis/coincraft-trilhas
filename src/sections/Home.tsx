import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { RoutePaths } from "@/utils/ui/Route";

export function Home() {
    return (
        <section className="relative h-screen max-h-[750px]  lg:max-h-[800px] w-full   bg-cover bg-center bg-no-repeat" id={'home'}>
            <div className="primary-gradient absolute flex flex-col h-full w-full items-center justify-start">
                <Header />
                <Container className="h-full flex gap-6 !pb-4  !pt-10 lg:pt-0 md:flex-row md:justify-between lg:gap-28 " >
                    <div className="flex w-full !max-w-[543px] flex-col justify-center gap-5 md:gap-10 items-center lg:items-start">
                        <h1 className="text-4xl font-semibold text-white md:text-[60px] md:font-bold md:leading-[71px]">
                            <img
                                src="/assets/logos/logo-coicraft.png" alt="Logo Coincraft"
                                width={506} height={120}
                                className="w-[196px] h-[80px] object-contain lg:w-[506px] lg:h-[120px]"
                            />
                        </h1>
                        <p className="text-center block w-full max-w-[596px] text-sm font-medium text-white md:text-xl lg:text-start">
                            Aprenda as melhores práticas financeiras e teste o seu conhecimento enquanto se diverte em uma emocionante aventura em busca da riqueza.
                        </p>
                        <div className="flex w-full justify-center gap-2 lg:justify-start lg:gap-6">
                            <a href={RoutePaths.play} target="_blank" >
                                <Button
                                    variant="default"
                                    className="w-full max-w-[280px] lg:w-[284px] uppercase"
                                >
                                    comece agora
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="h-full flex items-end justify-center lg:-mb-[45px]">
                        <img
                            src="/assets/hero.png"
                            alt="Hero Image"
                            width={633}
                            height={647}
                            className="w-[300px] h-[306px] object-contain lg:w-[633px] lg:h-[647px]"
                        />
                    </div>
                </Container>
            </div>
        </section>
    )
}
