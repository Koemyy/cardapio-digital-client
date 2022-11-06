interface CardsContent {
    name: string,
    price: string,
    oldPrice: string,
    description: string,
    img: string,
    tag?: string,
}

function CardsSection({name, price, oldPrice, img}: CardsContent) {
	return (
		<div className="lg:w-full hover:border-4 border-white-300 ease-in-out duration-100 relative my-5 align-middle">
			<img className="cursor-pointer w-[600px] h-[300px] object-cover" src={img}/>
			<div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-black-500 opacity-90">
				<div className="lg:flex lg:justify-between lg:items-center">
					<h3 className="text-xl text-white-300 font-bold">{name}</h3>
					<p className="text-sm text-white-300 line-through">R$ {oldPrice}</p>
					<p className="text-xl text-white-300">R$ {price}</p>
				</div>
			</div>
		</div>
	);
}

export default CardsSection;
