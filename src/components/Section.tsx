import Product from './Product';

interface CardapioContent {
    title: string,
    section: Content[],
}

interface Content {
	id: string,
    name: string,
    price: string,
    description: string,
	img: string,
	alt: string,
	tag: string | null,
}

/*
/*
			*/

function Section ({title, section}: any) {
	return (
		<div  id={`${title}`}>
			<h1 className="text-orange-700 flex text-xl py-5 font-bold justify-center md:text-3xl items-center">{title}</h1>
			<div>
				{
					section.map((sec:any) => {
						return (
							<Product
								key={sec.pro_id}
								id={sec.pro_id}
								name={sec.pro_nome}
								price={sec.pro_preco}
								desconto={sec.prm_desconto}
								description={sec.pro_descricao}
								img={sec.pro_imagem}
								tag={sec.tags}/>
						);
					})
				}
			</div>
		</div>
	);
}

export default Section;
