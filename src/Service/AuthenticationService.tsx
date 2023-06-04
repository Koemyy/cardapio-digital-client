import { save} from "./CookieService";

interface Produto {
    ped_id: number
    cli_id:  number
    pro_id: number
    ped_status : string
}

export async function salvarCompra({ped_id,cli_id, pro_id, ped_status}: Produto) {

    console.log('chegou na chamada')
    const url = 'http://localhost:3000/actions/salvarCompra';

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ped_id,cli_id, pro_id, ped_status
        })
    }).catch((err) => err.message)

}

//localhost:3000/actions/salvarCompra
export async function BuscarSessao(cli_token: string | null): Promise<string | null> {
    /*Para testes locais usar http://localhost:3000/cliente/autenticar/?cli_token=*/

    const url = 'https://cardapio-digital-api.onrender.com/cliente/autenticar/?cli_token=' + cli_token;

    const webToken: string | null = await fetch(url)
        .then((result) => {
            const resultJson = result.json();
            return resultJson !== null ? resultJson : "";

        }).then(({webToken}) => {
            save("webToken", webToken);
            return webToken;

        })

    return webToken;

}
