import {useState} from 'react';
import Payment from '../components/Payment';
import Link from 'next/link';
import {ArrowCircleLeft} from 'phosphor-react';

interface CardsContent {
    id: string,
    name: string,
    price: string,
    oldPrice: string,
    description: string,
    img: string,
    tag?: string,
}

function CardsCarousel({name, price, oldPrice, img, id}: CardsContent) {
	const [isPayment, setPaymentIsOpen] = useState(false);

	function openPaymentHandler() {
		setPaymentIsOpen(true);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		document.getElementById('hidde').style.display = 'none';
	}

	function closePaymentHandler() {
		setPaymentIsOpen(false);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		document.getElementById('hidde').style.display = 'block';
	}

	return (
		<div className="justify-center items-center bg-black-500">
			<div className="sm:w-48 md:w-48 lg:w-64 mx-5">
				<div className="flex py-5">
					<Link href="../products/01">
						<div className="top-0 text-orange-400"><ArrowCircleLeft size={40}/></div>
					</Link>
					<h1 className="text-orange-400 text-3xl font-bold pl-3">Rockland Bar</h1>
				</div>
				<div className="sm:w-48 md:w-48 lg:w-96">
					<div
						className="flex justify-between pt-5 underline underline-offset-4 decoration-orange-500 px-5 pb-3">
						<p onClick={closePaymentHandler}
							className="text-white-300 cursor-pointer text-">Selecionados</p>
						<p onClick={openPaymentHandler} className="text-white-300 cursor-pointer">Pedidos</p>
					</div>
				</div>
				<div id="hidde">
					<div className="flex pt-5">
						<p className="text-white-300 text-xl">Lanches</p>
					</div>
					<div className="py-5 flex text-white-300 justify-between">
						<p className="pr-5 pt-1">1x</p>
						<p className="font-semibold text-lg w-56">X-Bacon</p>
						<p className="pt-1">R$ 24,90</p>
					</div>
					<div className="flex pt-5">
						<p className="text-white-300 text-xl">Bebidas</p>
					</div>
					<div className="py-5 flex text-white-300 justify-between">
						<p className="pr-5 pt-1">1x</p>
						<p className="font-semibold text-lg w-56">Coca-lata</p>
						<p className="pt-1">R$ 5,50</p>
					</div>
					<div className="flex justify-center items-center pt-3">
						<Link href="../">
							<button
								className="border border-1 rounded-full px-5 py-3 cursor-pointer"
								type="submit">
								<label
									className="text-white-300 text-lg drop-shadow-lg">Adicionar
                                    mais itens</label>
							</button>
						</Link>
					</div>
					<div className="pt-3 text-white-300">
						<div className="flex justify-between pt-3 pb-2 text-sm">
							<p>Subtotal</p>
							<p>R$ 30,40</p>
						</div>
						<div className="flex justify-between text-2xl">
							<p>Total</p>
							<p className="text-green-500">R$ 30,40</p>
						</div>
					</div>
					<div className="block h-[1px] border-0 border-t border-solid border-grey-300 mt-1 p-0"></div>
					<div className="flex justify-center items-center pt-3">
						<button
							className="border mt-3 border-1 rounded-full px-20 py-3 cursor-pointer"
							type="submit">
							<label
								onClick={openPaymentHandler}
								className="text-white-300 text-lg drop-shadow-lg">Finalizar
                                pedido</label>
						</button>
					</div>
				</div>
			</div>
			{isPayment && (
				<Payment onClick={openPaymentHandler}/>
			)}
		</div>
	);
}

export default CardsCarousel;
