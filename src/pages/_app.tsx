import type {AppProps} from 'next/app';
import {useEffect, useState} from 'react';

import '../styles/global.css';
import CartProvider from '../Service/contextService';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';

function MyApp({Component, pageProps, router }: AppProps) {
    let routers = useRouter();
    const { pathname } = router;
    useEffect(()=>{
        const cookies = parseCookies(null);
        const token = cookies['webToken'];

        if (token == undefined && (pathname !== '/agradecimento' && pathname != '/inicio' ) ) {
            routers.push('/semToken');
            return;
        }
        
    },[Component])
    
      return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
