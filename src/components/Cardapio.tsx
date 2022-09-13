import Section from './Section';
import Cards from './Cards';

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
					'tag': null
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
			'sectionName': 'Promoções',
			'products': [
				{
					'name': 'Medalhão de frango',
					'price': '59,90',
					'oldPrice': '79,00',
					'description': 'Placerat in egestas erat imperdiet sed euismod. Lobortis feugiat vivamus at augue eget.',
					'img': 'https://revistasaboresdosul.com.br/wp-content/uploads/2015/01/brasil-kirin-expande-presenca-da-itubaina-no-brasil-640x474.jpg',
					'tag': null
				},
			]
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

export default Cardapio;
