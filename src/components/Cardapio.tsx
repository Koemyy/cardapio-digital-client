import Section from './Section';
import Cards from './Cards';
import Bars from './Bars';
import ProductPage from './ProductPage';

const section = {
	'cardapio': [
		{
			'sectionName': 'Lanches',
			'products': [
				{
					'id': '01',
					'name': 'Lanche com nome extremamente grande para fins de teste',
					'price': '18,00',
					'oldPrice': '25,00',
					'description': 'Diam in arcu cursus euismod. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.',
					'img': 'https://comeonburger.com.br/wp-content/uploads/2019/12/xbacon-especial.jpg',
					'alt': 'Foto ilustrativa de um X-Bacon',
					'tag': 'Teste',
					'ingredient': [
						'Teste1',
						'Teste2',
						'Teste3'
					],
					'serve': '2 pessoas'
				},
				{
					'id': '02',
					'name': 'X-Shimeji',
					'price': '22,00',
					'oldPrice': '30,00',
					'description': 'Turpis massa tincidunt dui ut ornare lectus sit. Sodales neque sodales ut etiam sit. Dolor sit amet consectetur adipiscing elit ut aliquam.',
					'img': 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1024h1024/2018/08/FEA/39043_lanche-de-cogumelos-do-bullguer.jpg',
					'alt': 'Foto ilustrativa de um X-Shimeji',
					'tag': 'Teste',
					'ingredient': [
						'Teste1',
						'Teste2',
						'Teste3'
					],
					'serve': '2 pessoas'
				},
			],
		},
		{
			'sectionName': 'Bebidas',
			'products': [
				{
					'id': '03',
					'name': 'Itubaina',
					'price': '8,00',
					'oldPrice': '10,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Lobortis feugiat vivamus at augue eget.',
					'img': 'https://revistasaboresdosul.com.br/wp-content/uploads/2015/01/brasil-kirin-expande-presenca-da-itubaina-no-brasil-640x474.jpg',
					'alt': 'Foto ilustrativa de um refrigerante sabor tutti-frutti',
					'tag': 'Teste',
					'ingredient': null,
					'serve': null,
				},
			]
		},
	],
	'cards': [
		{
			'sectionName': 'TUDO 25% OFF!',
			'products': [
				{
					'id': '01',
					'name': 'Medalhão de frango',
					'price': '59,90',
					'oldPrice': '79,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Lobortis feugiat vivamus at augue eget.',
					'img': 'http://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_1125508784.jpg',
					'tag': 'Bacon',
					'ingredient': [
						'Teste1',
						'Teste2',
						'Teste3'
					],
					'serve': '2 pessoas'
				},
				{
					'id': '02',
					'name': 'Porção de batata frita',
					'price': '21,90',
					'oldPrice': '28,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Ut faucibus pulvinar consectetur adipiscing elit ut.',
					'img': 'https://pubimg.band.uol.com.br/files/7ce45fcc850b7f1e4d5a.png',
					'tag': 'Vegetariano',
					'ingredient': [
						'Teste1',
						'Teste2',
						'Teste3'
					],
					'serve': '2 pessoas'
				},
				{
					'id': '03',
					'name': 'Red velvet',
					'price': '69,90',
					'oldPrice': '49,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Ut faucibus pulvinar consectetur adipiscing elit ut.',
					'img': 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/89/72/z1waTloRRUeZkdkAPS7A_rvcc1.jpg',
					'tag': 'Doce',
					'ingredient': [
						'Teste1',
						'Teste2',
						'Teste3'
					],
					'serve': '2 pessoas'
				}
			]
		}
	],
	'sections': [
		{
			'nome': 'Inicio',
			'cor': '#ffffff'
		},
		{
			'nome': 'Lanches',
			'cor': '#FEB803'
		},
		{
			'nome': 'Bebidas',
			'cor': '#FE0303'
		},
		{
			'nome': 'Açaí',
			'cor': '#781C68'
		},
		{
			'nome': 'Sobremesa',
			'cor': '#FF8FB1'
		},
		{
			'nome': 'Pizza',
			'cor': '#FD841F'
		}
	]
};

function Cardapio() {
	return (
		<div>
			{
				section.cardapio.map(cardapio => {
					return (
						<Section key={cardapio.sectionName} title={cardapio.sectionName} section={cardapio.products}/>
					);
				})
			}
		</div>
	);
}

export function CardapioCards() {
	return (
		<div>
			{
				section.cards.map(cards => {
					return (
						<Cards key={cards.sectionName} title={cards.sectionName} sectionCards={cards.products}/>
					);
				})
			}
		</div>
	);
}

export function Sections() {
	return (
		<div>
			{
				section.sections.map((sections, index) => {
					return (
						<Bars key={index} name={sections.nome} cor={sections.cor}/>
					);
				})
			}
		</div>
	);
}

export function ProductPageContent() {
	return (
		<div>
			{
				section.cards.map((products) => {
					return (
						products.products.map((productsDeep, index) => {
							return (
								<ProductPage key={index} name={productsDeep.name}
									price={productsDeep.price}
									oldPrice={productsDeep.oldPrice}
									description={productsDeep.description}
									img={productsDeep.img}
									tag={productsDeep.tag}
									ingredient={productsDeep.ingredient} serve={productsDeep.serve}
								/>
							);
						})
					);
				})
			}
		</div>
	);
}

export default Cardapio;
