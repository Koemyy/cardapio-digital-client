interface Content {
    name: string,
    price: string,
    description: string,
}

function Product({name, price, description}: Content) {
	return (
		<div className="flex text-center justify-center align-middle">
			<p className="justify-between">{name}</p>
			<p className="px-3">R$ {price}</p>
			<p className="py-5"> {description}</p>
		</div>
	);
}

export default Product;
