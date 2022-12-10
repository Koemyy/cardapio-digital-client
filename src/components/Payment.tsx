import {useState} from 'react';
import PopUp from '../components/PopUp';

function Payment() {
	const [showPopUp, setPopUpIsOpen] = useState(false);

	function openPopUpHandler() {
		setPopUpIsOpen(true);
	}

	function closePopUpHandler() {
		setPopUpIsOpen(false);
	}

	return (
		<div onMouseLeave={closePopUpHandler} className="justify-center items-center bg-black-500">
			<div className="mx-5">
				<div className="flex pt-5">
					<p className="text-white-300 text-xl md:text-3xl">Lanches</p>
				</div>
				<div className="py-5 flex text-white-300 justify-between">
					<p className="pr-5 pt-1">1x</p>
					<p className="font-semibold text-lg w-56 md:text-2xl w-56">X-Bacon</p>
					<p className="pt-1 md:text-xl">R$ 24,90</p>
				</div>
				<div className="py-5 flex text-white-300 justify-between">
					<p className="pr-5 pt-1">1x</p>
					<p className="font-semibold text-lg w-56 md:text-2xl w-56">X-tudo</p>
					<p className="pt-1 md:text-xl">R$ 30,00</p>
				</div>
				<div className="flex pt-5">
					<p className="text-white-300 text-xl font-bold md:text-3xl">Bebidas</p>
				</div>
				<div className="py-5 flex text-white-300 justify-between">
					<p className="pr-5 pt-1 md:text-xl">1x</p>
					<p className="font-semibold text-lg w-56 md:text-2xl">Coca-lata</p>
					<p className="pt-1 md:text-xl">R$ 5,50</p>
				</div>
				<div className="pt-3 text-white-300">
					<div className="flex justify-between pt-3 pb-2 text-sm">
						<p>Subtotal</p>
						<p>R$ 30,40</p>
					</div>
					<div className="flex justify-between pb-2 text-sm">
						<p>Taxa de serviço</p>
						<p>R$ 16,00</p>
					</div>
					<div className="flex justify-between text-2xl">
						<p className="md:text-3xl">Total</p>
						<p className="text-green-500 md:text-3xl">R$ 76,40</p>
					</div>
				</div>
				<div className="block h-[1px] border-0 border-t border-solid border-grey-300 mt-1 p-0"></div>
				<div className="flex justify-center items-center pt-3">
					<button onClick={openPopUpHandler} className="border mt-3 border-1 rounded-full px-20 py-3 cursor-pointer" type="submit">
						<label className="text-white-300 text-lg">Pagamento</label>
					</button>
				</div>
			</div>
			{showPopUp && (
				<PopUp/>
			)}
		</div>
	);
}

export default Payment;
