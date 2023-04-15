import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Methods from '../Service/CookieService';

import '../styles/global.css';
import SemToken from './semToken';
import CartProvider from '../Service/contextService';

function MyApp({ Component, pageProps }: AppProps) {

	const [isLoading, setIsLoading] = useState('');

	useEffect(()=>{
        if(Methods.get("webToken") == null && Component.name == 'Home'){
            setIsLoading('NaoAutorizado')

		}else if(Methods.get("webToken") == null){
			setIsLoading('NaoAutorizado')
			
		}else{
			setIsLoading('Autorizado')
		}
		
    })

	if(isLoading == 'Autorizado' || Component.name == "Aguarde" || Component.name == "ErrorFetch" || Component.name == 'Index'){
		return (
			<CartProvider>
				<Component {...pageProps} />
			</CartProvider>	
		);
	}else if (isLoading != 'Autorizado'){
		return (
			<SemToken/>
		);
	}
}

export default MyApp;