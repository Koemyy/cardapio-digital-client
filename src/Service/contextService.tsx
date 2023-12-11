import {createContext, useEffect, useState} from "react";
import Methods from "./CookieService";
import {parseCookies} from "nookies";

interface Item {
    id: number;
    name: string;
    price: number;
    observacao: string
}

interface itemCarrinho extends Item {
    contador: number;
}

//interface que especifica o tipo do meu context
interface CartContextData {
    items: Item[];
    addItem: (id: number, name: string, price: number, contador: number, observation: string) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
    getTotal: () => number;
    getItemsArray: () => { id: number, name: string, price: number, contador: number, observacao: string }[];
}

//cria meu contexto com especificao default
export const CartContext = createContext<CartContextData>({
    items: [],
    addItem: () => {
    },
    removeItem: () => {
    },
    removeAll: () => {
    },
    getTotal: () => 0,
    getItemsArray: () => [],
});

//funcao que implementa minha especificação e cria meu provider
export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [items, setItems] = useState<itemCarrinho[]>([]);

    const addItem = (id: number, name:string, price: number, contador : number, observacao: string) => {
        const item: Item = {id: id, name: name, price: price, observacao: observacao}

        //acha se o item ja existe na lista
        const indexItem = items.findIndex((i) => i.id === item.id)

        //se o itm existir aumenta a quantidade e o preço
        if (indexItem >= 0) {
            const itensNovos = [...items]
            itensNovos[indexItem].contador += contador;
            itensNovos[indexItem].price += price;

            setItems(itensNovos);
        } else {

            setItems([...items, {...item, contador}]);
        }


        Methods.saveAll('cart', JSON.stringify(items))
    };

    //busca a compra em cookie para atualizar o carrinho
    useEffect(() => {
        const cartCookie = parseCookies(null)['cart'];
        if (cartCookie) {
            setItems(JSON.parse(cartCookie));
        }
    }, []);

    //salva compra em cookie
    useEffect(() => {
        const json = JSON.stringify(items)
        Methods.saveAll('cart', json)
    }, [items]);

    const removeItem = (id: number) => {
        const item = items.find((item) => item.id === id);

        const indexItem = items.findIndex((i) => i.id === item?.id);

        if (indexItem >= 0) {
            const newCartItems = [...items];
            if (newCartItems[indexItem].contador > 1) {

                const qtdantiga = newCartItems[indexItem].contador;
                newCartItems[indexItem].contador--;

                const qtdAtual = qtdantiga - 1;
                const precoNovo = (newCartItems[indexItem].price / qtdantiga) * qtdAtual;

                newCartItems[indexItem].price = precoNovo;

            } else {
                newCartItems.splice(indexItem, 1);
            }
            setItems(newCartItems);
        }
    };

    const removeAll = () => {
        setItems([]);
    };

    const getTotal = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    const getItemsArray = () => {
        return items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            contador: item.contador,
            observacao: item.observacao
        }));
    };

    return (
        <CartContext.Provider value={{items, addItem, removeItem,removeAll, getTotal, getItemsArray}}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;


