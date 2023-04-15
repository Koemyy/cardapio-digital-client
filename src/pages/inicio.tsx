import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BuscarSessao } from "../Service/AuthenticationService";

export default function Index() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const query= router.query;

    const mesa = query['mesa'] as string;
    const token = query['token'] as string;

    useEffect(()=>{
        if(isLoading){
            router.push('/aguarde');
        }
        BuscarSessao(token);
        router.push('/menu');
        setTimeout(() => {
            setIsLoading(false) 
        }, 2000);
        
    })

    return null;
}
