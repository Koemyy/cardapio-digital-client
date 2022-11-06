import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

interface CardsContent {
    name: string,
    price: string,
    oldPrice: string,
    description: string,
    img: string,
    tag?: string,
}

function Promotions({name, price, oldPrice, img}: CardsContent) {
	return (
		<div>
			<img src={img}/>
			<div className="">
				<h3 className="legend">{name}</h3>
				<p className="legend">R$ {oldPrice}</p>
				<p className="legend">R$ {price}</p>
			</div>
		</div>
	);
}

export default Promotions;
