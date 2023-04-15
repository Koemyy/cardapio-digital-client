import { Children, createContext, useEffect, useState } from "react";
import Methods from "./CookieService";
import { parseCookies } from "nookies";

interface Item {
  id: string;
  name: string;
  price: number;
}

//interface que especifica o tipo do meu context 
interface CartContextData {
  items: Item[];
  addItem: (name: string, price: number) => void;
  removeItem: (id: string) => void;
  getTotal: () => number;
  getItemsArray: () => { id: string, name: string, price: number }[];
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
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (name: string, price: number) => {
    setItems([...items, {id: name, name: name, price: price}]);
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
    console.log(json)
    Methods.saveAll('cart', json)
  }, [items]);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const getItemsArray = () => {
    return items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
    }));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, getTotal , getItemsArray }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;


