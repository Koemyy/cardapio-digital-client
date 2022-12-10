import {GetStaticPaths, GetStaticProps} from 'next';
import {ProductPageContent} from '../../components/Cardapio';
interface Path extends GetStaticPaths {
    params: Params;
}

interface Params {
    id: string;
	name: string,
	price: string,
	oldPrice: string,
	description: string,
	img: string,
	tag: string | null,
	ingredient: string[],
	serve: string,
}

interface Props extends GetStaticProps {
    id: string;
}

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					id: '01'
				}
			},
			{
				params: {
					id: '02'
				}
			},
			{
				params: {
					id: '03'
				}
			}
		],
		fallback: false
	};
}

export async function getStaticProps(context: Path) {
	const id = context.params.id;
	return {
		props: {
			id: id,
		}
	};
}


function Produtos(props: Props) {
	return (
		<div>
			<ProductPageContent/>
		</div>
	);
}

export default Produtos;
