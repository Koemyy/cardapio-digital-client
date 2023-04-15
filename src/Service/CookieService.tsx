import nookies, { destroyCookie, setCookie } from 'nookies';
const ACESS_TOKEN = "ACESS_TOKEN";

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

export const Methods = { 
    saveAll(chave: string ,valor : any){
        if(valor!=null || valor != undefined){

            setCookie(null, chave, valor, {
                maxAge: ONE_YEAR,
                path: '/',
              });
        } 
    },
    save(chave: string ,valor : string){
        if(valor!=null || valor != undefined){

            setCookie(null, chave, valor, {
                maxAge: ONE_DAY,
                path: '/',
              });
        } 
    },
    
    delete(chave: string){

        destroyCookie(null, chave, {
            path: '/',
          });
    },

    get(chave : string) : string | null{
        const resp :string | null= nookies.get(null)[chave];
        return resp;
    }

};


export default Methods;