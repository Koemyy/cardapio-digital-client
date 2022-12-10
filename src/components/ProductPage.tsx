import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {ShoppingBag} from 'phosphor-react';
import Link from 'next/link';
import {ArrowCircleLeft} from 'phosphor-react';
import {useState} from 'react';

interface ProductsContent {
    name: string,
    price: string,
    oldPrice: string,
    description: string,
    img: string,
    tag: string | null,
    ingredient: string[] | null,
    serve: string | null,
}

function ProductPage({name, price, oldPrice, description, img, ingredient, tag, serve}: ProductsContent) {
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
				<div className="top-0 lg:left-[23%] lg:text-orange-400 absolute py-5 px-4 text-orange-400"><ArrowCircleLeft size={40}/></div>
			</Link>
			<div>
				<img src={img} alt={name} className="h-[500px] w-full object-cover"/>
				<div>
					<div>
						<div
							className="relative bg-black-500 mt-[-150px] w-full rounded-tl-3xl rounded-tr-3xl pb-20 pt-1">
							<div
								className="right-0 absolute bg-white-300 px-3 mr-3 justify-center items-center flex py-2 mt-3 rounded-full">
								<button className="mr-3 md:text-xl" onClick={decrease}>-</button>
								<label className="px-2 md:px-4 md:text-xl">{counter}</label>
								<button className="ml-3 md:text-xl" onClick={increase}>+</button>
							</div>
							<div className="items-start pl-3 flex flex-col">
								<h2 className="text-white-300 md:text-4xl flex py-3 text-2xl">{name}</h2>
								<div className="flex pb-1">
									<div className="text-lg mr-2 mb-4 md:text-2xl text-green-500">R$ {price}</div>
									<p
										className="text-sm line-through text-white-300 decoration-white-300">R$ {oldPrice}</p>
								</div>
								<p className="mb-5 text-white-300 md:text-xl">{description}</p>
								<p className="text-white-300 md:text-xl">Ingredientes: {ingredient}</p>
								<div className="flex rounded-full md:text-xl bg-orange-500 px-5 my-3">
									<p className="text-white-300">{tag}</p>
								</div>
								<div>
									<p className="text-white-300 md:text-xl">{serve}</p>
								</div>
							</div>
							<Link href="../orders">
								<button
									className="flex right-0 absolute mr-3 text-center cursor-pointer bg-orange-500 md:py-3 md:px-5 py-2 px-3 rounded-3xl align-middle">
									<label className="flex justify-center items-center text-white-300 text-sm md:text-xl"><ShoppingBag size="30"
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
