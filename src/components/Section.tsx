import Product from './Product';

interface CardapioContent {
    title: string,
    section: Content[],
}

interface Content {
    name: string,
    price: string,
    description: string,
	img: string,
	alt: string,
	tag: string | null,
}

function Section ({title, section}: CardapioContent) {
	return (
		<div>
			<h1 className="text-orange-700 flex text-xl py-5 font-bold justify-center items-center">{title}</h1>
			<div>
				{
					section.map(section => {
						return (
							<Product key={section.name} name={section.name}
								price={section.price}
								description={section.description} img={section.img} alt={section.alt} tag={section.tag}/>
						);
					})
				}
			</div>
		</div>
	);
}

export default Section;
