import QRCode from 'react-qr-code';

interface QrContentBtn {
    openQrCode: any;
}

function QRCodeContent({openQrCode}: QrContentBtn) {
    return (
        <div onMouseDown={openQrCode} className="fixed top-0 left-0 right-0 bottom-0 w-full">
            <div
                className="text-black-500 justify-center items-center w-full h-full text-center border-2 rounded-2xl bg-grey-300 border-b-black-500">
                <div className="md:py-24 py-32 text-black-500 md:text-3xl">
                    <p>Aponte a câmera do seu celular para o</p>
                    <p>QR-Code abaixo!</p>
                </div>
                <button>
                    <QRCode style={{height: 'auto', maxWidth: '100%', width: '100%'}} size={500}
                            value="https://cardapio-digital-api.onrender.com/"/>
                </button>
                <div className="py-3 md:text-xl">
                    <p className="text-black-500">QR-Code referente a</p>
                    <p className="text-green-500 font-bold">Mesa 01</p>
                </div>
            </div>
        </div>
    );
}

export default QRCodeContent;
