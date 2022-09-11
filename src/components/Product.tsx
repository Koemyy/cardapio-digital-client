interface Content {
    name: string,
    price: string,
    description: string,
    img: string,
    alt: string
    tag: string | null,
}

function Product({name, price, description, img, alt, tag}: Content) {
	return (
		<div className="flex text-center justify-center items-center">
			<div className="w-20 py-3 flex mx-5">
				<img src={img} alt={alt}/>
			</div>
			<div className="w-64">
				<div className="flex py-2 justify-between">
					<p className="text-orange-400 font-semibold break-after-auto">{name}</p>
				</div>
				<div className="flex items-center justify-center">
					<p className="mb-3 w-16 text-green-500 border border-green-500 rounded">{tag}</p>
				</div>
				<p className="px-2 flex justify-center w-64 text-white-300"> {description}</p>
				<div className="flex">
					<p className="text-white-300 py-1">R$ {price}</p>
				</div>
			</div>
		</div>
	);
}

export default Product;
