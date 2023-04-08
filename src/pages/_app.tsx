import type { AppProps } from 'next/app';
import Router  from 'next/router';
import { useEffect, useState } from 'react';
import tokenMethods from '../Service/TokenService';

import '../styles/global.css';
import CartProvider from '../Service/contextService';

function MyApp({ Component, pageProps }: AppProps) {

	const [isLoading, setIsLoading] = useState(false);

	useEffect(()=>{
        if(tokenMethods.get("webToken") == null && Component.name != "index"){
            Router.push('/semToken');
        }else{
			setIsLoading(true) 
		}
    }, [])

	if(isLoading || Component.name == "semToken" || Component.name == "aguarde" || Component.name == "errorFetch"){
		return (
			<CartProvider>
				<Component {...pageProps} />
			</CartProvider>	
		);
	}
}

export default MyApp;