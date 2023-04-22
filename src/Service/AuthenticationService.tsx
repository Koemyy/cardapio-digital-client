import { save} from "./CookieService";

export async function BuscarSessao(cli_token : string | null) : Promise<string | null> { 

    const url = 'https://cardapio-digital-api.onrender.com/cliente/autenticar/?cli_token=' + cli_token;

        const webToken : string | null = await fetch(url)
        .then((result)=>{
            const resultJson = result.json();
            return resultJson !== null ? resultJson : "";

        }).then(({webToken}) => {
            save("webToken", webToken);
            return webToken;

        })
        
        return webToken;

    return webToken;

}
