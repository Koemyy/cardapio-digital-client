import Section from './Section';
import ProductPage from './ProductPage';
import {Produtos} from '../pages';
import {ProductsContent} from "./ProductPage";

function Cardapio({ses_id, ses_nome, produtos}: Produtos) {
    return (
        <div>
            <Section key={ses_id} title={ses_nome} section={produtos}/>
        </div>
    );
}

export function ProductPageContent(props: ProductsContent) {

    return (
        <div>
            <ProductPage key={props.pro_id}
                         prm_desconto={props.prm_desconto}
                         pro_precoNovo={props.pro_preco - props.pro_preco * props.prm_desconto / 100}
                         pro_preco={props.pro_preco}
                         pro_imagem={props.pro_imagem}
                         pro_descricao={props.pro_descricao}
                         pro_nome={props.pro_nome}
                         pro_id={props.pro_id}
                         pro_ingredient={props.pro_ingredient}
                         pro_serve={props.pro_serve}
                         pro_tag={props.pro_tag}
            />

        </div>
    );
}

export default Cardapio;
