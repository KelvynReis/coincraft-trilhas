import { CardList } from '@/components/CardList'
import { Container } from '@/components/Container'

export function About() {
    return (
        <section className='w-full bg-secondary' id='about'>
            <Container className='gap-6 lg:px-0 lg:gap-20'>
                <div className='center-col gap-3 lg:gap-7'>
                    <h2 className='text-3xl lg:text-[60px] font-bold text-center text-white'>Domine a gestão financeira com  <span className='text-[#58F49A]'>CoinCraft</span> </h2>
                    <p className='text-xl lg:text-2xl text-center max-w-[1092px]'>Avance por mais de 20 níveis cheios de aventuras enquanto conquista os seus objetivos!
                        Aprenda sobre gestão financeira e transforme o seu conhecimento.
                    </p>
                </div>

                <CardList />
            </Container>
        </section>
    )
}
