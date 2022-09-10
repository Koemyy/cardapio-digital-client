import Product from './Product';

interface CardapioContent {
    title: string,
    section: Content[],
}

interface Content {
    name: string,
    price: string,
    description: string,
}

function Section ({title, section}: CardapioContent) {
	return (
		<div>
			<h1 className="grid content-center justify-center">{title}</h1>
			<div>
				{
					section.map(section => {
						return (
							<Product name={section.name}
								price={section.price}
								description={section.description}/>
						);
					})
				}
			</div>
		</div>
	);
}

export default Section;
