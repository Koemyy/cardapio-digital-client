import { useState } from "react";
import tokenMethods from "./TokenService";

interface token {
    cli_token :string
    message : string 
}

export async function buscarToken (cli_nome : string | null) : Promise<string | any> { 

    await fetch('http://localhost:3000/cliente', {
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
       tokenMethods.save("token_key", cli_token);
       return cli_token.toString();
    });

}


export async function buscarSessao(cli_token : string | null) : Promise<string | null> { 

    const url = 'http://localhost:3000/cliente/autenticar/?cli_token=' + cli_token;

    const webToken : string | null = await fetch(url)
        .then((result)=>{
            const resultJson = result.json();
            if(!result.statusText) { 
                throw new Error ("usuario ou mesa não existe");
            }
            return resultJson !== null ? resultJson : "";

        }).then(({webToken }) =>{
            tokenMethods.save("webToken",webToken);
            return webToken;
        })

    return webToken;
}



export function useSession(){
	const [loanding, setLoanding] = useState<boolean>(true);
	const [dados, setDados] = useState<string | null>("");
	const [error, setError] = useState<boolean>(false);
  
	buscarSessao(tokenMethods.get("token_key"))
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
    await buscarToken(mesa)
    .then(()=>{
        buscarSessao(tokenMethods.get("token_key"))
    });
}