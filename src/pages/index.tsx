import type {NextPage} from 'next';
import Head from 'next/head';
import Cardapio from '../components/Cardapio';
import Header from '../components/Header';

const section = {
	'cardapio': [
		{
			'sectionName': 'Lulu',
			'products': [
				{
					'name': 'Lala',
					'price': '20,00',
					'description': 'Lala'
				},
				{
					'name': 'Lulu',
					'price': '17,00',
					'description': 'Luuuuuu'
				}
			]
		},
		{
			'sectionName': 'Lala',
			'products': [
				{
					'name': 'Lala',
					'price': '20,00',
					'description': 'Lala'
				},
				{
					'name': 'Lulu',
					'price': '17,00',
					'description': 'Luuuuuu'
				}
			]
		}
	]
};

const Home: NextPage = () => {
	return (
		<div className="border-black-500 border-2">
			<Head>
				<title>Cardápio Digital</title>
			</Head>
			<header>
				<Header title="RockLand Bar" subtitle="Desde 1958"/>
			</header>
			<main>
				<Cardapio/>
			</main>
		</div>
	);
};

export default Home;
