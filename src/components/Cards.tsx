import CardsCarousel from './CardsCarousel';
import { Carousel } from 'react-responsive-carousel';

interface CardsCarousel {
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

function Cards({title, sectionCards}: CardsCarousel) {
	return (
		<div>
			<h1 className="text-orange-500 flex text-xl py-5 font-bold justify-center items-center">{title}</h1>
			<div className="flex">
				<Carousel showArrows={true} autoPlay={true} interval={5000} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true} className="inline-block">
					{
						sectionCards.map(sectionCards => {
							return (
								<section key={sectionCards.name} className="inline-block px-5">
									<CardsCarousel key={sectionCards.name} name={sectionCards.name}
										price={sectionCards.price}
										oldPrice={sectionCards.oldPrice}
										description={sectionCards.description} img={sectionCards.img}
									/>
								</section>
							);
						})
					}
				</Carousel>
			</div>
		</div>
	);
}

export default Cards;
