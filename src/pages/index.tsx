import type {NextPage} from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import CartIcon from '../components/CartIcon';
import Section from '../components/Section';
import Cards from '../components/Cards';
import Bars from '../components/Bars';

export interface ProdutosSeparados {
    pro_id: number,
    pro_nome: string,
    pro_preco: number,
    prm_desconto: number,
    pro_descricao: string,
    pro_imagem: string,
    tags: Tag[]
}

export interface Produtos {
    ses_id: number,
    ses_nome: string,
    produtos: ProdutosSeparados[]
}

interface Tag {
    ses_id: number,
    ses_nome: string,
    ses_cor: string
}

export async function getStaticProps() {

    const cardapio = await fetch('http://localhost:3000/cardapio/')
        .then(response => response.json())
        .then((data) => {
            const produtos: ProdutosSeparados = {
                pro_id: data.pro_id,
                pro_nome: data.pro_nome,
                pro_preco: data.pro_preco,
                prm_desconto: data.prm_desconto,
                pro_descricao: data.pro_descricao,
                pro_imagem: data.pro_imagem,
                tags: data.tags
            }
            return data
        });

    const promocao = await fetch('http://localhost:3000/cardapio/promocoes')
        .then(response => response.json())
        .then((data) => {
            const promocoes: Produtos = {
                ses_id: data.prm_id,
                ses_nome: data.prm_nome,
                produtos: data.produtos
            }
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
                <div className="flex justify-center items-center">
                    <div
                        className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                        {
                            props.cardapio.map((tag: Tag) => {
                                return (
                                    <Bars key={tag.ses_id} name={tag.ses_nome} cor={tag.ses_cor}/>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="flex justify-center align-middle items-center">
                    {
                        <Cards key={props.promocao.ses_id} title={props.promocao.ses_nome}
                               sectionCards={props.promocao.produtos}/>

                    }
                </div>

                {
                    props.cardapio.map((produto: Produtos) => {
                        return (
                            <Section key={produto.ses_id} title={produto.ses_nome} section={produto.produtos}/>
                        );
                    })
                }
                <CartIcon/>
            </main>
        </div>
    );
};

export default Home;
