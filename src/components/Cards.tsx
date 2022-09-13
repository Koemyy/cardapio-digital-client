import CardsSection from './CardsSection';

interface CardsSection {
    title: string,
    sectionCards: CardsContent[],
}

interface CardsContent {
    name: string,
    price: string,
    oldPrice: string,
    description: string,
    img: string,
    tag: string | null,
}

function Cards({title, sectionCards}: CardsSection) {
	return (
		<div>
			<h1 className="text-orange-700 flex text-xl py-5 font-bold justify-center items-center">{title}</h1>
			<div>
				{
					sectionCards.map(sectionCards => {
						return (
							<CardsSection key={sectionCards.name} name={sectionCards.name}
								price={sectionCards.price}
								oldPrice={sectionCards.oldPrice}
								description={sectionCards.description} img={sectionCards.img}
								tag={sectionCards.tag}/>
						);
					})
				}
			</div>
		</div>
	);
}

export default Cards;
