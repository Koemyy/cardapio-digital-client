import {ShoppingBag} from 'phosphor-react';
import Link from 'next/link';

function CartIcon() {
	return (
		<div className="fixed right-0 bottom-0 py-5 px-5">
			<div
				className="py-5 px-5 bg-grey-300 rounded-full cursor-pointer ease hover:ease-in-out duration-300 hover:bg-white-300 drop-shadow-lg">
				<Link href="/cart">
					<ShoppingBag/>
				</Link>
			</div>
		</div>
	);
}

export default CartIcon;
