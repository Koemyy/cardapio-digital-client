import {useState} from 'react';

interface PaymentContent {
    onClick: any;
}

function Payment({onClick}: PaymentContent) {
	return (
		<div className="justify-center items-center bg-black-500">
			<div className="sm:w-48 md:w-48 lg:w-64 mx-5">
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
						<p>Total</p>
						<p className="text-green-500">R$ 46,40</p>
					</div>
				</div>
				<div className="block h-[1px] border-0 border-t border-solid border-grey-300 mt-1 p-0"></div>
				<div className="flex justify-center items-center pt-3">
					<button
						className="border mt-3 border-1 rounded-full px-20 py-3 cursor-pointer"
						type="submit">
						<label className="text-white-300 text-lg">Pagamento</label>
					</button>
				</div>
				<div className="flex justify-center items-center pt-3">
					<button
						className="border mt-3 border-1 rounded-full px-20 py-3 cursor-pointer"
						type="submit">
						<label className="text-white-300 text-lg">CPF/CNPJ na nota</label>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Payment;
