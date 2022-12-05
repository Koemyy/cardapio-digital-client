import Link from 'next/link';
import {AiFillShopping} from 'react-icons/ai';

function Cart() {
	return (
		<div className="fixed right-0 bottom-0 py-5 px-5">
			<div className="py-5 px-5 bg-grey-300 rounded-full cursor-pointer ease hover:ease-in-out duration-300 hover:bg-white-300 drop-shadow-lg">
				<AiFillShopping className="text-black-500"/>
			</div>
		</div>
	);
}

export default Cart;
