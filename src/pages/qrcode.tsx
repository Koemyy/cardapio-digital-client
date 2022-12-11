import Dropdown from '../components/Dropdown';

function Qrcode () {
	return (
		<div className="flex flex-col justify-center items-center h-full w-full pt-52">
			<div className="text-white-300 pt-5 text-center">
				<h1 className="text-3xl md:text-5xl">Selecione</h1>
				<p className="pt-5 md:text-2xl">Selecione uma das mesas disponiveis abaixo para gerar um Qr-Code</p>
			</div>
			<Dropdown/>
		</div>
	);
}

export default Qrcode;
