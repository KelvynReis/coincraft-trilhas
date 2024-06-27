import CardItem from "./CardItem"

const cardData = [
    {
        title: 'DESAFIO E ESTRATÉGIA',
        description: 'Responda perguntas desafiadoras sobre economia, investimentos, poupança e planejamento financeiro para evoluir no jogo.',
    },
    {
        title: 'AVENTURA FINANCEIRA',
        description: 'Aprimore as suas habilidades financeiras enquanto luta contra vilões e obstáculos que querem interromper a sua jornada!'
    },
    {
        title: 'CONHECIMENTO E AÇÃO',
        description: 'Responda corretamente  as perguntas dentro do tempo estipulado para avançar mais rápido nos níveis. O tempo não para!'
    }
]

export const CardList = () => {
    return (
        <div className='w-full flex-wrap flex flex-col items-center gap-6 lg:gap-[38px] lg:flex-row'>
            {cardData.map((card, index) => (
                <CardItem
                    key={index}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )
}