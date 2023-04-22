import type {NextPage} from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import CartIcon from '../components/CartIcon';
import Section from '../components/Section';
import Cards from '../components/Cards';
import Bars from '../components/Bars';

interface Props {
    cardapio: Sessao[]
}

interface Sessao {
    ses_nome: string,
    ses_cor: string
}

interface Produtos {
    pro_id: number,
    pro_nome: string,
    pro_preco: number,
    prm_desconto: number,
    pro_descricao: string,
    pro_imagem: string,
    tags: Tag[]
}

interface Tag {
    tag_id: number,
    tag_nome: string,
    tag_cor: string
}

export async function getStaticProps() {

    const cardapio = await fetch('https://cardapio-digital-api.onrender.com/cardapio/')
        .then(response => response.json())
        .then((data) => {
            return data
        });

    const promocao = await fetch('https://cardapio-digital-api.onrender.com/cardapio/promocoes')
        .then(response => response.json())
        .then((data) => {
            return data
        });

    return {
        props: {
            cardapio,
            promocao
        }
    }
}

const Home: NextPage = (props: any) => {

    return (
        <div className="bg-black-500">
            <Head>
                <title>Cardápio Digital</title>
            </Head>
            <header>
                <Header title="RockLand Bar" subtitle="Desde 1958"/>
            </header>
            <main>
                <div className="flex justify-center whitespace-nowrap overflow-hidden">
                    {
                        props.cardapio.map((teste: any) => {
                            return (
                                <Bars key={teste.ses_id} name={teste.ses_nome} cor={teste.ses_cor}/>
                            );
                        })
                    }
                </div>

                <div className="flex justify-center align-middle items-center">
                    {

                        <Cards key={props.promocao.prm_id} title={props.promocao.prm_nome}
                               sectionCards={props.promocao.produtos}/>

                    }

                </div>

                {

                    props.cardapio.map((teste: any) => {
                        return (
                            <Section key={teste.ses_id} title={teste.ses_nome} section={teste.produtos}/>

                        );
                    })
                }
                <CartIcon/>
            </main>

        </div>
    );
};

export default Home;
