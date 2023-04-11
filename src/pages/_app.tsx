import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import tokenMethods from '../Service/TokenService';

import '../styles/global.css';
import SemToken from './semToken';

function MyApp({ Component, pageProps }: AppProps) {

	const [isLoading, setIsLoading] = useState('');

	useEffect(()=>{
        if(tokenMethods.get("webToken") == null && Component.name == 'Home'){
            setIsLoading('NaoAutorizado')

		}else if(tokenMethods.get("webToken") == null){
			setIsLoading('NaoAutorizado')
			
		}else{
			setIsLoading('Autorizado')
		}
		
    })

	if(isLoading == 'Autorizado' || Component.name == "Aguarde" || Component.name == "ErrorFetch" || Component.name == 'Index'){
		return (
			<Component {...pageProps} />
		);
	}else if (isLoading != 'Autorizado'){
		return (
			<SemToken/>
		);
	}
}

export default MyApp;