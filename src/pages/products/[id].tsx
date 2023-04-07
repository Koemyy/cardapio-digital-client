import {GetStaticPaths, GetStaticProps} from 'next';
import {ProductPageContent} from '../../components/Cardapio';
interface Path extends GetStaticPaths {
    params: Params;
}

interface Params {
    id: string;
}

interface Props extends GetStaticProps {
    id: string;
}

export async function getStaticPaths() {

	const produtos= await fetch('https://cardapio-digital-api.onrender.com/paths/')
        .then(response => response.json())
        .then((data) => {
            return data
    });

	return {
		paths: produtos,
		fallback: false
	};
}

export async function getStaticProps(context: Path) {
	
	const produto= await fetch(`https://cardapio-digital-api.onrender.com/produto/${context.params.id}`)
        .then(response => response.json())
        .then((data) => {
            return data
    });

	return{
		props:{
			pro_id: produto.pro_id,
			pro_nome: produto.pro_nome,
			pro_preco: produto.pro_preco,
  			prm_desconto: produto.prm_desconto,
  			pro_descricao: produto.pro_descricao,
			pro_serve: produto.pro_serve,
  			pro_imagem: produto.pro_imagem,
			tags: produto.tags,
			ingredientes: produto.ingredientes
		}
	}
}

function Produtos(props: any) {
	return (
		<div>
			<ProductPageContent 
				pro_id={props.pro_id}
				pro_nome={props.pro_nome}
				pro_preco={props.pro_preco}
				prm_desconto={props.prm_desconto}
				pro_descricao={props.pro_descricao}
				pro_serve={props.pro_serve}
				pro_imagem={props.pro_imagem}
				tags={props.tags}
				ingredientes={props.ingredientes}
			/>
		</div>
	);
}

export default Produtos;
