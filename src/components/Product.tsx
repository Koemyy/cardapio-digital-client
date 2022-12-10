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
		<div className="flex justify-center items-center">
			<div className="sm:w-48 md:w-48 lg:w-64 py-3 flex mx-5">
				<img src={img} alt={alt}/>
			</div>
			<div className="sm:w-48 md:w-48 lg:w-96">
				<div className="py-2">
					<p className="break-words text-orange-400 font-semibold">{name}</p>
				</div>
				<div className="flex items-center">
					<p className="mb-3 text-white-300 rounded-full bg-orange-500 px-5 my-3">{tag}</p>
				</div>
				<p className="flex justify-center text-white-300"> {description}</p>
				<div className="flex">
					<p className="text-white-300 font-bold py-2">R$ {price}</p>
				</div>
			</div>
		</div>
	);
}

export default Product;
