import CardsCarousel from './CardsCarousel';
import {Carousel} from 'react-responsive-carousel';
import {ProdutosSeparados} from '../pages';
interface CardsSection {
	title: string,
	sectionCards: ProdutosSeparados[],
}

function Cards({sectionCards, title}: CardsSection) {
	return (
		<div>
			<h1 className="text-orange-500 flex text-xl py-5 font-bold justify-center items-center">{title}</h1>
			<div className="flex">
				<Carousel showArrows={false} autoPlay={true} interval={5000} showStatus={false} showThumbs={false}
					showIndicators={false} infiniteLoop={true} className="inline-block">
					{
						sectionCards.map((sec: ProdutosSeparados) => {
							return (
								<section key={sec.pro_id} className="inline-block px-5">
									<CardsCarousel key={sec.pro_id}
										id={sec.pro_id}
										name={sec.pro_nome}
										price={parseFloat(String(sec.pro_preco))}
										oldPrice={parseFloat(String(sec.prm_desconto))}
										description={sec.pro_descricao}
										img={sec.pro_imagem}
									/>
								</section>
							);
						})
					}
				</Carousel>
			</div>
		</div>

	);
}

export default Cards;
