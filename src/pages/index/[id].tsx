import { useRouter } from "next/router";
import { buscarSessao } from "../../Service/AuthenticationService";
import Router from 'next/router'
import { useEffect, useState } from "react";

export default function index() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const param: string | undefined = router.query.id?.toString();

    const array: string[] | undefined = param?.split("~");

    const id: string | undefined = array != undefined ? array[0] : "";
    const token: string | undefined = array != undefined ? array[1] : "";

    useEffect(()=>{
        if(isLoading){
            Router.push('/aguarde');
        }
        try{
            buscarSessao(token);
            Router.push('/menu');
            setTimeout(() => {
                setIsLoading(false) 
            }, 20000);
        }catch(error : any){
            throw new Error(error.message)
        }   
    })

}
