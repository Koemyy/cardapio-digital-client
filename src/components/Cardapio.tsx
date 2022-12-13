import Section from './Section';
import ProductPage from './ProductPage';

function Cardapio(props:any[]|any) {
	return (
		<div>
			{
					props.map((teste:any) => {
						return (
							<Section key={teste.ses_id} title={teste.ses_nome} section={teste.produtos}/>
						);
					})
				}
		</div>
	);
}

export function ProductPageContent(props: any) {

	return (
		<div>
		 <ProductPage key={props.pro_id} name={props.pro_nome}
			price={props.pro_preco - props.pro_preco * props.prm_desconto / 100}
			oldPrice={props.pro_preco}
			description={props.pro_descricao}
			img={props.pro_imagem}
			serve={props.pro_serve}
			tag={props.tags}
			ingredient={props.ingredientes}
		/>

		</div>
	);
}

export default Cardapio;
