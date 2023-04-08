import { Children, createContext, useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

//interface que especifica o tipo do meu context 
interface CartContextData {
  items: Item[];
  addItem: (name: string, price: number) => void;
  removeItem: (id: number) => void;
  getTotal: () => number;
  getItemsArray: () => { id: number, name: string, price: number }[];
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
  const [items, setItems] = useState<Item[]>([{id: 1, name : 'lanche 1', price : 23.50}]);

  const addItem = (name: string, price: number) => {
    setItems([...items, {id: 2, name: name, price: price}]);
  };

  const removeItem = (id: number) => {
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


