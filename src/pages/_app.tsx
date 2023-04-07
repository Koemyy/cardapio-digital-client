import type { AppProps } from 'next/app';
import Router  from 'next/router';
import { useEffect, useState } from 'react';
import tokenMethods from '../Service/TokenService';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {

	const [isLoading, setIsLoading] = useState(false);

	useEffect(()=>{
        if(tokenMethods.get("webToken") == null && Component.name != "index"){
            Router.push('/semToken');
        }else{
			setIsLoading(true) 
		}
    }, [])

	if(isLoading || Component.name == "semToken" || Component.name == "aguarde"){
		return <Component {...pageProps} />;
	}
}

export default MyApp;