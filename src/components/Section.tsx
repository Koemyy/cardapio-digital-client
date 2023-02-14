import Product from './Product';
import {ProdutosSeparados} from '../pages';
interface FirstSection {
    title: string,
    section: ProdutosSeparados[],
}

function Section ({title, section}: FirstSection) {
	return (
		<div  id={`${title}`}>
			<h1 className="text-orange-700 flex text-xl py-5 font-bold justify-center md:text-3xl items-center">{title}</h1>
			<div>
				{
					section.map((sec: ProdutosSeparados) => {
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
