import { CardList } from '@/components/CardList'
import { Container } from '@/components/Container'

export function About() {
    return (
        <section className='w-full bg-secondary' id='about'>
            <Container className='gap-6 lg:px-0 lg:gap-20'>
                <div className='center-col gap-3 lg:gap-7'>
                    <h2 className='text-3xl lg:text-[57px] font-bold text-center text-white tracking-tighter'>Aprimore a sua educação financeira com <span className='text-[#58F49A]'>CoinCraft</span> </h2>
                    <p className='text-xl lg:text-2xl text-center max-w-[1092px] text-white'>Avance por níveis repletos de desafios e inimigos enquanto acumula conhecimento sobre gestão financeira e aprimora as suas habilidades para se tornar um mestre das finanças.
                    </p>
                </div>

                <CardList />
            </Container>
        </section>
    )
}
