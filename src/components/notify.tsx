import React from 'react';
import {ArrowCircleLeft} from 'phosphor-react';

interface NotifyContent {
	closePopUp: any,
}
function Notify ({closePopUp}: NotifyContent) {
	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 w-full">
			<div className="absolute text-black-500 left-[20%] right-[20%] bottom-[50%] top-[30%] text-center border-2 rounded-2xl bg-white-300 border-b-black-500">
				<div className="py-2 px-2" onMouseDown={closePopUp}><ArrowCircleLeft size={40}/></div>
				<p className="md:text-xl px-2">O atendente foi notificado e está a caminho da sua mesa!</p>
				<button className="text-white-300 bg-black-500 rounded-full py-2 px-5 mt-6 md:text-xl" onMouseDown={closePopUp}>Ok</button>
			</div>
		</div>
	);
}

export default Notify;
