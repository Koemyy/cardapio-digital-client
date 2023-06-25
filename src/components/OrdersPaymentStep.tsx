import {useEffect, useState} from 'react';
import { AtualizarStatusPedidosByCliente, buscarPedidosByCliente } from '../Service/ProductService';
import { getNumber } from '../Service/CookieService';
import { useRouter } from 'next/router';

interface Produto {
    cli_id:  number
    pro_id: number
    pro_nome : string
    ped_quantidade : string,
    ped_preco : string
}


function OrdersPaymentStep() {
    const [itens, setItens] = useState<Produto[]>([]);
    const router = useRouter();
    const getTotal =  itens.reduce((total, item) => total + parseFloat(item.ped_preco), 0);

    useEffect(() => {
        async function fetchPedidosorCliente() {
            const cli_cliente :number = getNumber('cli_id');
            const data = await buscarPedidosByCliente(cli_cliente);
            setItens(data);
        }

        fetchPedidosorCliente();

        const interval = setInterval(fetchPedidosorCliente, 2000);
        return () => {
            clearInterval(interval);
        }

    }, [])

    async function redirect() {
        const cli_id :number = getNumber('cli_id');
        await AtualizarStatusPedidosByCliente(cli_id, "F");

        router.push('/agradecimento')
    }
    return (
        <div className="justify-center items-center bg-black-500">
            <div className="mx-5">
                <div className="text-white-300 md:text-xl px-5 py-3">
                    {
                        itens.map((item, key) => {
                            return (
                                <ul key={item.pro_id}>
                                    <li key={key} className="flex items-center mb-2">
                                        <div className="md:w-1/4 md:text-2xl">
                                            {item.ped_quantidade}x
                                        </div>
                                        <div className="w-1/2 pl-1 md:text-2xl">{item.pro_nome}</div>
                                        <div className="md:w-1/4 text-right md:text-2xl pr-10 right-0 fixed">
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
                    <button onClick={redirect}
                            className="border mt-3 border-1 rounded-full px-20 py-3 cursor-pointer" type="submit">
                        <label className="text-white-300 text-lg md:text-2xl">Pagamento</label>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrdersPaymentStep;
