import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {ShoppingBag} from 'phosphor-react';
import Link from 'next/link';
import {ArrowCircleLeft} from 'phosphor-react';
import {useState} from 'react';

export interface ProductsContent {
	pro_id?: number
    pro_nome: string,
    pro_preco: number,
	pro_precoNovo: number,
    prm_desconto: number,
    pro_descricao: string,
    pro_imagem: string,
    pro_tag?: Tags[]| null,
    pro_ingredient?: Ingredientes[] | null,
    pro_serve?: string | null,
}

interface Ingredientes {
	ing_nome: string,
	ing_id: number
}

interface Tags {
	tag_id: number,
	tag_nome: string,
	tag_cor: string
}

function ProductPage({pro_nome, pro_preco, pro_descricao, pro_imagem, pro_tag, pro_ingredient, pro_serve, pro_precoNovo}: ProductsContent) {
	const [counter, setCounter] = useState(1);

	//increase counter
	const increase = () => {
		setCounter(count => count + 1);
	};

	const decrease = () => {
		if (counter > 1) {
			setCounter(count => count - 1);
		}
	};

	return (
		<section className="lg:flex lg:items-center lg:justify-center bg-black-500">
			<Link href="../">
				<div className="cursor-pointer top-0 lg:left-[23%] lg:text-orange-400 absolute py-5 px-4 text-orange-400"><ArrowCircleLeft size={40}/></div>
			</Link>
			<div>
				<img src={pro_imagem} alt={pro_nome} className="h-[500px] md:h-[600px] lg:h-[600px] w-full object-cover"/>
				<div>
					<div>
						<div
							className="relative bg-black-500 mt-[-150px] w-full rounded-tl-3xl rounded-tr-3xl pb-20 pt-1 md:pt-5 pl-3">
							<div
								className="right-0 absolute bg-white-300 px-3 mr-3 justify-center items-center flex py-2 mt-3 rounded-full">
								<button className="mr-3 md:text-xl" onClick={decrease}>-</button>
								<label className="px-2 md:px-4 md:text-xl">{counter}</label>
								<button className="ml-3 md:text-xl" onClick={increase}>+</button>
							</div>
							<div className="items-start pl-3 flex flex-col">
								<h2 className="text-white-300 md:text-5xl flex py-3 text-2xl font-semibold">{pro_nome}</h2>
								<div className="flex pb-1">
									<div className="text-lg mr-2 mb-4 md:text-3xl text-green-500">R$ {pro_precoNovo.toFixed(2)}</div>
									<p
										className="text-sm line-through text-white-300 decoration-white-300">R$ {pro_preco.toFixed(2)}</p>
								</div>
								<p className="mb-5 text-white-300 md:text-2xl">{pro_descricao}</p>

								<p className="text-white-300 md:text-2xl font-semibold"> Ingredientes: </p>
								<div className="text-white-300 md:text-xl">
									{pro_ingredient?.map((conteudo: Ingredientes) =>
									{
										return(
											<p key={conteudo.ing_id} className='ml-10'>{conteudo.ing_nome}</p>
										)
									}
									)}
								</div>

								<div className="flex gap-2 pt-3">
									{
										pro_tag?.map((conteudo: Tags) =>
										{
											return (
												<p key={conteudo.tag_id} style= {{backgroundColor: conteudo.tag_cor}} className="flex rounded-full md:text-xl px-5 my-3 text-black font-bold">
														{conteudo.tag_nome}
												</p>
											)
										}
										)
									}
								</div>


								<div>
									<p className="text-white-300 md:text-xl pt-3">Serve: {pro_serve} pessoa</p>
								</div>
							</div>
							<Link href="../orders">
								<button
									className="flex bottom-0 right-0 absolute mr-3 text-center cursor-pointer bg-orange-500 md:py-3 md:px-5 py-2 px-3 rounded-3xl align-middle">
									<label className="flex justify-center items-center text-white-300 text-sm md:text-3xl"><ShoppingBag size="30"
										weight="fill"/>Carrinho</label>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductPage;
