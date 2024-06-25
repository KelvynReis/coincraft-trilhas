import { Container } from "@/components/Container";
import { navLinks } from "@/utils/navLinks";
import { RoutePaths } from "@/utils/ui/Route";

export function Footer() {
    return (
        <section className="w-full primary-gradient">
            <Container className="items-center lg:items-start gap-3 lg:gap-[25px] lg:!pb-2">
                <picture className=" items-center justify-center gap-4 md:flex">
                    <a
                        href={RoutePaths.home}
                        className="md:flex md:flex-col md:items-center md:justify-center"
                    >
                        <img
                            src="/assets/logos/logo-inova.png"
                            alt="Logo Inova maranhao"
                            width={143}
                            height={48}
                            className='object-contain w-[100px] h-[20px]  lg:w-[143px] lg:h-[48px]'
                        />
                    </a>
                </picture>


                <div className="w-full flex flex-col justify-between items-center border-t-2 py-4 lg:flex-row">
                    <span className="text-white">
                        Termos e condições
                    </span>

                    <div className="flex flex-col items-center gap-2 lg:gap-12 lg:flex-row">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.path}
                                className="text-white uppercase font-bold hover:text-[#58F49A]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
