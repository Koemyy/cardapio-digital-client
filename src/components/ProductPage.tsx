import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

interface ProductsContent {
    name: string,
    price: string,
    oldPrice: string,
    description: string,
    img: string,
    tag: string | null,
    ingredient: string[] | null,
    serve: string | null,
}

function ProductPage({name, price, oldPrice, description, img, ingredient, tag, serve}: ProductsContent) {
	return (
		<div>

		</div>
	);
}

export default ProductPage;
