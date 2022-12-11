import Link from 'next/link';
interface Content {
    id: string,
    name: string,
    price: string,
    description: string,
    img: string,
    alt: string
    tag: string | null,
}

function Product({name, price, description, img, alt, tag, id, desconto}: any) {
	return (
		<div className="flex justify-center items-center">
			<Link href={`./products/${id}`}>
				<div className="w-56 md:w-80 lg:w-64 py-3 flex mx-5 cursor-pointer">
					<img src={img} alt={alt}/>
				</div>
			</Link>
			<div className="w-64 md:w-64 lg:w-96">
				<div className="py-2">
					<p className="break-words md:text-xl text-orange-400 font-semibold">{name}</p>
				</div>
				<div className="flex items-center gap-3">
					
					{
						tag?.map((conteudo:any) =>
							{
								return (
									<p key={conteudo.tag_id} style= {{backgroundColor: conteudo.tag_cor}} className="flex rounded-full md:text-xl px-5 my-3 text-black font-bold">
											{conteudo.tag_nome}
									</p>
								)
							}
							)
						}
					
				</div>
				<p className="flex justify-left md:text-lg text-white-300"> {description}</p>
				<div className="flex">
					<p className="text-white-300 md:text-xl font-bold py-2">R$ {(price - price * desconto/100).toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
}

export default Product;
