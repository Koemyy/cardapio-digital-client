import {useEffect, useState} from 'react';
import PaymentOptions from './PaymentOptions';
import { buscarPedidosByCliente } from '../Service/ProductService';
import { getNumber } from '../Service/CookieService';

interface Produto {
    cli_id:  number
    pro_id: number
    pro_nome : string
    ped_quantidade : string,
    ped_preco : string
}


function OrdersPaymentStep() { 
    const [itens, setItens] = useState<Produto[]>([]);
    const [showPopUp, setPopUpIsOpen] = useState(false);

    function openPopUpHandler() {
        setPopUpIsOpen(true);
    }

    function closePopUpHandler() {
        setPopUpIsOpen(false);
    }

    const getTotal =  itens.reduce((total, item) => total + parseFloat(item.ped_preco), 0);

    useEffect(() => {
        async function fetchMesas() {
            const cli_cliente :number = getNumber('cli_id');
            const data = await buscarPedidosByCliente(cli_cliente);
            console.log(data)
            setItens(data);
        }

        fetchMesas();
    }, [])
    return (
        <div onMouseLeave={closePopUpHandler} className="justify-center items-center bg-black-500">
            <div className="mx-5">
                <div className="text-white-300 md:text-xl px-5 py-3">
                    {
                        itens.map((item, key) => {
                            return (
                                <ul key={item.pro_id}>
                                    <li key={key} className="flex items-center mb-2">
                                        <div className="w-1/2 md:text-2xl">{item.pro_nome}</div>
                                        <div className="w-1/4 md:text-2xl text-right">
                                            {item.ped_quantidade}
                                            </div>
                                        <div className="w-1/4 text-right md:text-2xl pr-10 right-0 fixed">
                                            R$ {item.ped_preco}
                                        </div>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div className="pt-3 text-white-300">
                    <div className="flex justify-between text-2xl">
                        <p className="md:text-4xl">Total</p>
                        <p className="text-green-500 md:text-3xl">R$ {getTotal.toFixed(2)}</p>
                    </div>
                </div>
                <div className="block h-[1px] border-0 border-t border-solid border-grey-300 mt-1 p-0"></div>
                <div className="flex justify-center items-center pt-3">
                    <button onClick={openPopUpHandler}
                            className="border mt-3 border-1 rounded-full px-20 py-3 cursor-pointer" type="submit">
                        <label className="text-white-300 text-lg md:text-2xl">Pagamento</label>
                    </button>
                </div>
            </div>
            {showPopUp && (
                <PaymentOptions/>
            )}
        </div>
    );
}

export default OrdersPaymentStep;
