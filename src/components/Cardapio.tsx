import Section from './Section';
import Cards from './Cards';
import Bars from './Bars';

const section = {
	'cardapio': [
		{
			'sectionName': 'Lanches',
			'products': [
				{
					'name': 'Lanche com nome extremamente grande para fins de teste',
					'price': '18,00',
					'description': 'Diam in arcu cursus euismod. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.',
					'img': 'https://comeonburger.com.br/wp-content/uploads/2019/12/xbacon-especial.jpg',
					'alt': 'Foto ilustrativa de um X-Bacon',
					'tag': null
				},
				{
					'name': 'X-Shimeji',
					'price': '22,00',
					'description': 'Turpis massa tincidunt dui ut ornare lectus sit. Sodales neque sodales ut etiam sit. Dolor sit amet consectetur adipiscing elit ut aliquam.',
					'img': 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1024h1024/2018/08/FEA/39043_lanche-de-cogumelos-do-bullguer.jpg',
					'alt': 'Foto ilustrativa de um X-Shimeji',
					'tag': null,
				},
			],
		},
		{
			'sectionName': 'Bebidas',
			'products': [
				{
					'name': 'Itubaina',
					'price': '8,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Lobortis feugiat vivamus at augue eget.',
					'img': 'https://revistasaboresdosul.com.br/wp-content/uploads/2015/01/brasil-kirin-expande-presenca-da-itubaina-no-brasil-640x474.jpg',
					'alt': 'Foto ilustrativa de um refrigerante sabor tutti-frutti',
					'tag': null
				},
			]
		},
	],
	'cards': [
		{
			'sectionName': 'TUDO 25% OFF!',
			'products': [
				{
					'name': 'Medalhão de frango',
					'price': '59,90',
					'oldPrice': '79,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Lobortis feugiat vivamus at augue eget.',
					'img': 'http://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_1125508784.jpg',
					'tag': null
				},
				{
					'name': 'Porção de batata frita',
					'price': '21,90',
					'oldPrice': '28,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Ut faucibus pulvinar consectetur adipiscing elit ut.',
					'img': 'https://pubimg.band.uol.com.br/files/7ce45fcc850b7f1e4d5a.png',
					'tag': null
				},
				{
					'name': 'Red velvet',
					'price': '69,90',
					'oldPrice': '49,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Ut faucibus pulvinar consectetur adipiscing elit ut.',
					'img': 'https://images.aws.nestle.recipes/resized/4204bf964018004a8d7f031aadda7e52_bolo-red-velvet-receitas-nestle_1200_600.jpg',
					'tag': null
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

export default Cardapio;
