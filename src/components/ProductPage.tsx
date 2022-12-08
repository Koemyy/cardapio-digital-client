import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {ShoppingBag} from 'phosphor-react';

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
	if (typeof document !== 'undefined') {
		// eslint-disable-next-line prefer-const
		let buttonAdd = document.getElementById('add');
		const buttonRemove = document.getElementById('remove');
		// eslint-disable-next-line prefer-const
		let label = document.getElementById('label'),
			count = 0;
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		buttonAdd.onclick = function () {
			count += 1;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			label.innerHTML = String(+count);
		};
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		buttonRemove.onclick = function () {
			count -= 1;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			label.innerHTML = String(+count);
		};
	}


	return (
		<section className="lg:flex lg:items-center lg:justify-center bg-black-500">
			<div>
				<img src={img} alt={name} className="h-[500px] w-full object-cover"/>
				<div>
					<div>
						<div
							className="relative bg-black-500 mt-[-150px] w-full rounded-tl-3xl rounded-tr-3xl pb-20 pt-1">
							<div
								className="right-0 absolute bg-white-300 px-3 mr-3 justify-center items-center flex py-2 mt-3 rounded-full">
								<button id="remove">-</button>
								<label id="label" className="px-2">1</label>
								<button id="add">+</button>
							</div>
							<div className="items-start pl-3 flex flex-col">
								<h2 className="text-white-300 flex py-3 text-2xl">{name}</h2>
								<div className="flex pb-1">
									<div className="text-lg mr-2 mb-4 text-green-500">R$ {price}</div>
									<p
										className="text-sm line-through text-white-300 decoration-white-300">{oldPrice}</p>
								</div>
								<p className="mb-5 text-white-300">{description}</p>
								<p className="mb-5 text-white-300 space">{ingredient}</p>
								<div className="flex pt-3 pb-3">
									<p>{tag}</p>
								</div>
								<div>
									<p className="text-white-300">{serve}</p>
								</div>
							</div>
							<button
								className="flex right-0 absolute mr-3 text-center cursor-pointer bg-orange-500 py-3 px-5 rounded-3xl align-middle">
								<label className="flex text-white-300"><ShoppingBag size="20"
									weight="fill"/>Carrinho</label>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductPage;
