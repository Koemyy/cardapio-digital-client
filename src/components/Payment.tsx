import {useContext, useState} from 'react';
import PopUp from '../components/PopUp';
import {CartContext} from '../Service/contextService';

function Payment() {
    const {getItemsArray, getTotal} = useContext(CartContext)
    const itens = getItemsArray()
    const [showPopUp, setPopUpIsOpen] = useState(false);

    function openPopUpHandler() {
        setPopUpIsOpen(true);
    }

    function closePopUpHandler() {
        setPopUpIsOpen(false);
    }

    return (
        <div onMouseLeave={closePopUpHandler} className="justify-center items-center bg-black-500">
            <div className="mx-5">
                <div className="text-white-300 md:text-xl">
                    {
                        itens.map((item, key) => {
                            return (
                                <ul key={item.id}>
                                    <li key={key} className="flex items-center mb-2">
                                        <div className="w-1/2">{item.name}</div>
                                        <div className="w-1/4 text-right">
                                            R${item.price.toFixed(2)}
                                        </div>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div className="pt-3 text-white-300">
                    <div className="flex justify-between pt-3 pb-2 text-sm">
                        <p>Subtotal</p>
                        <p>{getTotal().toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between pb-2 text-sm">
                        <p>Taxa de serviço</p>
                        <p>R$ 16,00</p>
                    </div>
                    <div className="flex justify-between text-2xl">
                        <p className="md:text-4xl">Total</p>
                        <p className="text-green-500 md:text-3xl">{getTotal().toFixed(2)}</p>
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
                <PopUp/>
            )}
        </div>
    );
}

export default Payment;
