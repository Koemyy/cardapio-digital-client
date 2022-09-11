import type {NextPage} from 'next';
import Head from 'next/head';
import Cardapio from '../components/Cardapio';
import Header from '../components/Header';


const Home: NextPage = () => {
	return (
		<div className="bg-black-500">
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
