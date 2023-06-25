import Methods from "../Service/CookieService";

function Agradecimento() {
    Methods.delete('cart')
    Methods.delete('webToken')
    Methods.delete('cli_id')
    return (
        <div className="text-white-300 flex flex-col justify-center items-center h-screen">
            <h1 className="text-orange-400 mb-5 text-5xl font-bold pl-3 md:text-5xl">Rockland Bar</h1>
            <h1 className="text-xl">Agradece sua preferência!</h1>
            <p className="mt-2">Volte sempre.</p>
        </div>
    );
}

export default Agradecimento;
