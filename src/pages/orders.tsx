import {useContext, useState} from 'react';
import OrdersPaymentStep from '../components/OrdersPaymentStep';
import Link from 'next/link';
import {ArrowCircleLeft} from 'phosphor-react';
import {CartContext} from '../Service/contextService';
import { salvarCompra } from '../Service/AuthenticationService';

interface CardsContent {
    id: string,
    name: string,
    price: string,
    oldPrice: string,
    description: string,
    img: string,
    tag?: string,
}

function CardsCarousel({name, price, oldPrice, img, id}: CardsContent) {
    const [isPayment, setPaymentIsOpen] = useState(false);
    const {getItemsArray, removeItem, getTotal} = useContext(CartContext)

    const itens = getItemsArray()

    function openPaymentHandler() {

        itens.map((item)=>{
            salvarCompra({ped_id: 1, cli_id:1, pro_id: 3, ped_status:'fim'})
        })
        setPaymentIsOpen(true);
        // @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.getElementById('hidde').style.display = 'none';
    }

    function closePaymentHandler() {
        setPaymentIsOpen(false);
        // @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.getElementById('hidde').style.display = 'block';
    }

    return (
        <div className="justify-center items-center bg-black-500">
            <div className="mx-5">
                <div className="flex py-5">
                    <Link href={`../menu`}>
                        <div className="top-0 text-orange-400 md:pt-1"><ArrowCircleLeft size={40}/></div>
                    </Link>
                    <h1 className="text-orange-400 text-3xl font-bold pl-3 md:text-5xl">Rockland Bar</h1>
                </div>
                <div className="">
                    <div
                        className="flex justify-between pt-5 underline underline-offset-4 decoration-orange-500 px-5 pb-3">
                        <p onClick={closePaymentHandler}
                           className="text-white-300 cursor-pointer md:text-4xl">Selecionados</p>
                        <p onClick={openPaymentHandler}
                           className="text-white-300 cursor-pointer md:text-4xl">Pedidos</p>
                    </div>
                </div>
                <div id="hidde">
                    <div className="text-white-300 md:text-xl py-3 px-5">
                        {
                            itens.map((item, key) => {
                                return (
                                    <ul key={item.id}>
                                        <li key={key} className="flex items-center mb-2">
                                            <div className="w-1/2 md:text-2xl">{item.name}</div>
                                            <div className="w-1/4 md:text-2xl text-right">
                                                R$ {item.price.toFixed(2)}
                                            </div>
                                            <div className="w-1/4 md:text-2xl text-right">
                                                {item.contador}
                                            </div>
                                            <div className="w-1/4 text-right">
                                                <button
                                                    className="md:text-xl text-white p-1 rounded-md"
                                                    onClick={() => removeItem(item.id)}>
                                                    Remover
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                )

                            })
                        }

                    </div>
                    <div className="flex justify-center items-center pt-3">
                        <Link href="../menu">
                            <button
                                className="border border-1 rounded-full px-5 py-3 cursor-pointer"
                                type="submit">
                                <label
                                    className="text-white-300 text-lg md:text-2xl drop-shadow-lg">Adicionar
                                    mais itens</label>
                            </button>
                        </Link>
                    </div>
                    <div className="pt-3 text-white-300">
                        <div className="flex justify-between pt-3 pb-2 text-sm">
                            <p className="md:text-xl">Subtotal</p>
                            <p className="md:text-xl">R$ {getTotal().toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-2xl">
                            <p className="md:text-4xl">Total</p>
                            <p className="text-green-500 md:text-3xl">R$ {getTotal().toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="block h-[1px] border-0 border-t border-solid border-grey-300 mt-1 p-0"></div>
                    <div className="flex justify-center items-center pt-3">
                        <button
                            className="border mt-3 border-1 rounded-full px-20 py-3 cursor-pointer"
                            type="submit">
                            <label
                                onClick={openPaymentHandler}
                                className="text-white-300 text-lg md:text-2xl drop-shadow-lg">Finalizar
                                pedido</label>
                        </button>
                    </div>
                </div>
            </div>
            {isPayment && (
                <OrdersPaymentStep/>
            )}
        </div>
    );
}

export default CardsCarousel;
