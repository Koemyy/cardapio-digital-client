import type {AppProps} from 'next/app';
import {useEffect, useState} from 'react';

import '../styles/global.css';
import CartProvider from '../Service/contextService';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';

function MyApp({Component, pageProps}: AppProps) {
    let router = useRouter();
    useEffect(()=>{
        const cookies = parseCookies(null);
        const token = cookies['webToken'];

        if (token == undefined && Component.name != 'Aguarde' ) {
            router.push('/semToken');
            return;
        }
        
    },[])
    
      return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;