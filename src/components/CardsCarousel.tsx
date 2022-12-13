import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

interface CardsContent {
    id: string,
    name: string,
    price: number,
    oldPrice: number,
    description: string,
    img: string,
    tag?: string,
}

function CardsCarousel({name, price, oldPrice, img, id}: CardsContent) {
	return (
		<Link href={`./products/${id}`}>
			<div
				className="cursor-pointer lg:w-full hover:border-4 border-white-300 ease-in-out duration-100 relative my-5 align-middle">
				<img className="cursor-pointer lg:w-[1700px] lg:h-[650px] h-full w-[400] object-cover" src={img}
					alt={name}/>
				<div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-black-500 opacity-90">
					<div className="lg:flex lg:justify-between lg:items-center">
						<h3 className="text-xl text-white-300 font-bold md:text-3xl">{name}</h3>
						<p className="text-sm text-white-300 line-through">R$ {price.toFixed(2)}</p>
						<p className="text-xl text-white-300 md:text-3xl font-semibold">R$ {(price - price * oldPrice /100).toFixed(2)}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default CardsCarousel;
