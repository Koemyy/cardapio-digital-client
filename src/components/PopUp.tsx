import {CreditCard} from 'phosphor-react';
import {Money} from 'phosphor-react';
import {useState} from 'react';
import Notify from '../components/notify';

function PopUp () {
	const [sendMessage, setSendMessage] = useState(false);

	function sendMessageTrue() {
		setSendMessage(true);
	}

	function sendMessageFalse() {
		setSendMessage(false);
	}

	return (
		<div className="flex justify-center items-center bg-white-300 h-56 md:h-[21em] rounded-tl-3xl rounded-tr-3xl mt-3">
			<div className="text-center font-semibold text-black-500">
				<div onClick={sendMessageTrue} className="flex justify-center items-center pb-3 cursor-pointer">
					<p className="pr-3"><CreditCard size={50}/></p>
					<p className="text-lg md:text-2xl">Crédito</p>
				</div>
				<div onClick={sendMessageTrue} className="flex justify-center items-center py-3 cursor-pointer">
					<p className="pr-4"><CreditCard size={50}/></p>
					<p className="text-lg md:text-2xl">Debito</p>
				</div>
				<div onClick={sendMessageTrue} className="flex justify-center items-center pt-3 cursor-pointer">
					<p className="pr-4"><Money size={50} /></p>
					<p className="text-lg md:text-2xl">Dinheiro</p>
				</div>
			</div>
			{sendMessage && (
				<Notify
					closePopUp={sendMessageFalse}
					description="O atendente foi notificado e está a caminho da sua mesa!"
					buttonText="Ok"
				/>
			)}
		</div>
	);
}

export default PopUp;
