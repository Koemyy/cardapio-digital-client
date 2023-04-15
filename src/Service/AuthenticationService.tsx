import { useState } from "react";
import  { Methods } from "./CookieService";

interface token {
    cli_token :string
    message : string 
}

export async function BuscarToken (cli_nome : string | null) : Promise<string | any> { 

    await fetch('https://cardapio-digital-api.onrender.com/cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cli_nome
        })
    })
    .then((result)=>{
        return result.json();
    })
    .then(({cli_token, message} : token) => {

        if(cli_token == undefined || cli_token == null){
            throw new Error (message);
        }
       Methods.save("token_key", cli_token);
       return cli_token.toString();
    });

}


export async function BuscarSessao(cli_token : string | null) : Promise<string | null> { 

    const url = 'https://cardapio-digital-api.onrender.com/cliente/autenticar/?cli_token=' + cli_token;

        const webToken : string | null = await fetch(url)
        .then((result)=>{
            const resultJson = result.json();
            if(!result.statusText) { 
                throw new Error ("usuario ou mesa não existe");
            }
            return resultJson !== null ? resultJson : "";

        }).then(({webToken }) =>{
            Methods.save("webToken",webToken);
            return webToken;

        }).catch((error)=>{
            throw new Error (error.message);
        })
        
        return webToken;

   
}



export function UseSession(){
	const [loanding, setLoanding] = useState<boolean>(true);
	const [dados, setDados] = useState<string | null>("");
	const [error, setError] = useState<boolean>(false);
  
	BuscarSessao(Methods.get("token_key"))
	.then((response)=>{
		setDados(response);

	}).catch((err)=>{
		console.log(err.message);
		setError(true);

	}).finally(()=>{
		setLoanding(false);
	})
  
	return{
	  dados,
	  error,
	  loanding
	}
}

export const obetemSession = async (mesa :string)=>{
    await BuscarToken(mesa)
    .then(()=>{
        BuscarSessao(Methods.get("token_key"))
    });
}