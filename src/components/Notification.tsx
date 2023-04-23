import {useState} from 'react';
import {ArrowCircleLeft} from 'phosphor-react';
import QRCodeContent from './QRCode';

interface NotifyContent {
    description: string,
    closePopUp: any,
    buttonText: string,
}

function Notification({closePopUp, description, buttonText}: NotifyContent) {
    const [showQRCode, setQRCode] = useState(false);

    function showQrCode() {
        setQRCode(true);
    }

    function hideQRCode() {
        setQRCode(false);
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full">
            <div
                className="absolute text-black-500 left-[20%] right-[20%] md:bottom-[50%] bottom-[45%] top-[30%] text-center border-2 rounded-2xl bg-white-300 border-b-black-500">
                <div className="py-2 px-2" onMouseDown={closePopUp}><ArrowCircleLeft size={40}/></div>
                <p className="md:text-2xl md:font-bold px-2">{description}</p>
                <button onMouseDown={showQrCode} onClick={closePopUp}
                        className="text-white-300 bg-black-500 rounded-full md:px-5 mt-4 py-2 px-5 md:mt-3 md:text-2xl">{buttonText}</button>
            </div>
            {showQRCode && (
                <QRCodeContent
                    openQrCode={hideQRCode}
                />
            )}
        </div>
    );
}

export default Notification;
