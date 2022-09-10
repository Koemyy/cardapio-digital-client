import {GetStaticPaths, GetStaticProps} from 'next';

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

const content = {
	'products': [
		{
			'id': '01',
			'name': 'X-Bacon',
			'img': 'https://comeonburger.com.br/wp-content/uploads/2019/12/xbacon-especial.jpg',
			'tags': 'Lanche',
			'descricao': 'Diam in arcu cursus euismod. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.',
			'price': '18,00',
		},
		{
			'id': '02',
			'name': 'X-Shimeji',
			'img': 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1024h1024/2018/08/FEA/39043_lanche-de-cogumelos-do-bullguer.jpg',
			'descricao': 'Turpis massa tincidunt dui ut ornare lectus sit. Sodales neque sodales ut etiam sit. Dolor sit amet consectetur adipiscing elit ut aliquam.',
			'price': '22,00',
		},
		{
			'id': '03',
			'name': 'Itubaina',
			'img': 'https://revistasaboresdosul.com.br/wp-content/uploads/2015/01/brasil-kirin-expande-presenca-da-itubaina-no-brasil-640x474.jpg',
			'descricao': 'Placerat in egestas erat imperdiet sed euismod. Lobortis feugiat vivamus at augue eget.',
			'price': '8,00',
		},
	]
};

function Produtos(props: Props) {
	return (
		<div>
			<p>Id produto: {props.id}</p>
			<div>{content.products.map(products => {
				if (props.id === products.id) {
					return (
						<div>
							<p>{products.name}</p>
							<img src={products.img} alt={products.name}/>
							<p>{products.descricao}</p>
							<p>{products.price}</p>
						</div>
					);
				}
			})}</div>
		</div>
	);
}

export default Produtos;
