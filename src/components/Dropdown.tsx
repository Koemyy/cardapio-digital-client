import {useState} from 'react';
import {ArrowDown} from 'phosphor-react';
import Notify from './notify';

function Dropdown() {
	const [open, setOpen] = useState(false);
	const [sendMessage, setSendMessage] = useState(false);

	function sendMessageTrue() {
		setSendMessage(true);
	}

	function sendMessageFalse() {
		setSendMessage(false);
	}
	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="text-white-300">
			<div className="pt-3 flex">
				<button onClick={handleOpen} className="flex md:text-2xl text-xl bg-black-400 md:py-3 md:px-10 rounded-full mt-5 py-1 px-10">
					Mesa 01
					<label className="flex ml-4"><ArrowDown size="25"/></label>
				</button>
			</div>
			<div className="pt-2 text-center text-xl">
				{open ? (
					<ul className="border-2 border-grey-300 rounded-2xl bg-black-400">
						<li className="cursor-pointer py-2">
							<p className="md:text-2xl">Mesa 1</p>
						</li>
						<li className="cursor-pointer py-2">
							<p className="md:text-2xl">Mesa 2</p>
						</li>
						<li className="cursor-pointer py-2">
							<p className="md:text-2xl">Mesa 3</p>
						</li>
					</ul>
				) : null}
				<button onClick={sendMessageTrue} className="mt-10 bg-black-400 md:px-10 md:py-5 md:text-2xl rounded-full text-lg px-3 py-1">
					<label className="text-center">Gerar</label>
				</button>
			</div>
			{sendMessage && (
				<Notify
					closePopUp={sendMessageFalse}
					description="Gerar QR-Code para a Mesa 01?"
					buttonText="Gerar"
				/>
			)}
		</div>
	);
}

export default Dropdown;
