import { createContext, useEffect, useState } from "react";
import Methods from "./CookieService";
import { parseCookies } from "nookies";

interface Item {
  id: string;
  name: string;
  price: number;
}

interface itemCarrinho extends Item{
  contador : number;
}

//interface que especifica o tipo do meu context 
interface CartContextData {
  items: Item[];
  addItem: (name: string, price: number) => void;
  removeItem: (id: string) => void;
  getTotal: () => number;
  getItemsArray: () => { id: string, name: string, price: number , contador : number}[];
}

//cria meu contexto com especificao default 
export const CartContext = createContext<CartContextData>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  getTotal: () => 0,
  getItemsArray: () => [],
});

//funcao que implementa minha especificação e cria meu provider
export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [items, setItems] = useState<itemCarrinho[]>([]);

  const addItem = (name: string, price: number) => {
    const item :Item = {id: name, name: name, price: price}

    const indexItem = items.findIndex((i)=>i.id === item.id) 

    if(indexItem >= 0 ){
      const itensNovos = [...items]
      itensNovos[indexItem].contador++;
      itensNovos[indexItem].price += itensNovos[indexItem].price;

      setItems(itensNovos);
    }else{

      setItems([...items, {...item, contador : 1}]);
    }

    
    Methods.saveAll('cart',JSON.stringify(items))
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

  const removeItem = (id: string) => {
    const item = items.find((item) => item.id === id);

    const indexItem = items.findIndex((i)=> i.id === item?.id);

    if (indexItem >= 0) {
      const newCartItems = [...items];
      if (newCartItems[indexItem].contador > 1) {

        const qtdantiga = newCartItems[indexItem].contador;
        newCartItems[indexItem].contador--;

        const qtdAtual = qtdantiga-1;
        const precoNovo = (newCartItems[indexItem].price / qtdantiga) * qtdAtual;

        newCartItems[indexItem]. price = precoNovo;

      } else {
        newCartItems.splice(indexItem, 1);
      }
      setItems(newCartItems);
    }
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const getItemsArray = () => {
    return items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      contador : item.contador
    }));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, getTotal , getItemsArray }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;


