import { GetStaticPaths, GetStaticProps } from 'next';

interface Path extends GetStaticPaths{
	params: Params;
}
interface Params{
	id: string;
}
interface Props extends GetStaticProps{
	id: string;
}

export async function getStaticPaths() {
	return {
		paths: [{
			params:{
				id: 'amor'
			}
		},
		{
			params:{
				id: 'toca'
			}
		}],
		fallback: false
	};
}

export async function getStaticProps(context:Path) {
	const id = context.params.id;

	return {
		props: {
			id: id
		}
	};
}

function Produtos(props:Props) {
	return (
		<div>Id produto: {props.id}</div>
	);
}

export default Produtos;