import {useEffect} from 'react';
import {useState} from 'react';

interface CardsContent {
    name: string,
    price: string,
    oldPrice: string,
    description: string,
    img: string,
    tag: string | null,
}

function CardsSection({name, price, oldPrice, description, img, tag}: CardsContent) {
	/*
        useEffect(() => {
            fetch('http://localhost:3000/Cardapio.json')
                .then((response) => response.json())
                .then(console.log);
        }, []);
    */
	return (
		<div className="flex box-border mx-3 justify-center items-center">
			<div className="sm:w-32 md:w-48 lg:w-96 py-3 rounded overflow-hidden shadow-lg">
				<div className="sm:w-32 md:w-48 lg:w-96">
					<img className="w-full" src={img}/>
				</div>
				<div className="px-6 py-4">
					<div className="break-words font-bold text-orange-500 mb-2">{name}</div>
					<p className="text-white-300">{description}</p>
				</div>
				<div className="px-6 pb-3">
					<span
						className="flex items-center justify-center mb-3 w-16 text-green-500 border border-green-500 rounded">{tag}</span>
					<span
						className="px-3 text-white-300">R$ {price}</span>
					<span
						className="px-3 text-grey-300 line-through">R$ {oldPrice}</span>
				</div>
			</div>
		</div>
	);
}

export default CardsSection;
