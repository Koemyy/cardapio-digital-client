import {useContext, useState} from 'react';
import {CartContext} from '../Service/contextService';
import {router} from "next/client";
function OrdersPaymentStep() {
    const {getItemsArray, getTotal} = useContext(CartContext)
    const itens = getItemsArray()
    const [showPopUp, setPopUpIsOpen] = useState(false);
    function openPopUpHandler() {
        setPopUpIsOpen(true);
    }

    function closePopUpHandler() {
        setPopUpIsOpen(false);
    }

    function redirect() {
        router.push('/agradecimento')
    }

    return (
        <div onMouseLeave={closePopUpHandler} className="justify-center items-center bg-black-500">
            <div className="mx-5">
                <div className="text-white-300 md:text-xl px-5 py-3">
                    {
                        itens.map((item, key) => {
                            return (
                                <ul key={item.id}>
                                    <li key={key} className="flex items-center mb-2">
                                        <div className="w-1/2 md:text-2xl">{item.name}</div>
                                        <div className="w-1/4 text-right md:text-2xl pr-10 right-0 fixed">
                                            R$ {item.price.toFixed(2)}
                                        </div>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div className="pt-3 text-white-300">
                    <div className="flex justify-between pt-3 pb-2 md:text-xl text-sm">
                        <p>Subtotal</p>
                        <p>R$ {getTotal().toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between pb-2 md:text-xl text-sm">
                        <p>Taxa de serviço</p>
                        <p>R$ 00,0</p>
                    </div>
                    <div className="flex justify-between text-2xl">
                        <p className="md:text-4xl">Total</p>
                        <p className="text-green-500 md:text-3xl">R$ {getTotal().toFixed(2)}</p>
                    </div>
                </div>
                <div className="block h-[1px] border-0 border-t border-solid border-grey-300 mt-1 p-0"></div>
                <div className="flex justify-center items-center pt-3">
                    <button onClick={redirect}
                        className="border mt-3 border-1 rounded-full px-20 py-3 cursor-pointer" type="submit">
                        <label className="text-white-300 text-lg md:text-2xl">Finalizar Compra</label>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrdersPaymentStep;
