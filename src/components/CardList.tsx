import CardItem from "./CardItem"

const cardData = [
    {
        title: 'POUPAR E INVESTIR',
        description: 'Aprenda a equilibrar suas despesas e a priorizar seus gastos de maneira inteligente.',
    },
    {
        title: 'PLANEJE O FUTURO',
        description: 'Estabeleça metas, crie um orçamento eficaz e aprenda a fazer escolhas que garantam um futuro próspero.'
    },
    {
        title: 'GERENCIE DÍVIDAS',
        description: 'Enfrente desafios que simulam situações reais de endividamento. Aprenda a negociar pagamentos e evitar armadilhas financeiras.'
    }
]

export const CardList = () => {
    return (
        <div className='w-full flex-wrap flex flex-col items-center gap-6 lg:gap-[39px] lg:flex-row'>
            {cardData.map((card, index) => (
                <CardItem
                    key={index}
                    title={card.title}
                    description={card.description}
                    className={index === 0 ? 'pb-12' : ''}
                />
            ))}
        </div>
    )
}