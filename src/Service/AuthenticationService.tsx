import { save} from "./CookieService";

export async function BuscarSessao(cli_token: string | null): Promise<string | null> {
    /*Para testes locais usar http://localhost:3000/cliente/autenticar/?cli_token=*/


    const url = 'https://api-lcvn.onrender.com/cliente/autenticar/?cli_token=' + cli_token;

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
