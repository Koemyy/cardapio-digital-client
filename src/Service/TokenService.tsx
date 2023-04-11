
const ACESS_TOKEN = "ACESS_TOKEN";
export const TokenMethods = { 
    save(chave: string ,WebToken : string){
        if(WebToken!=null || WebToken != undefined){
            localStorage.setItem(chave, WebToken);
        } 
    },
    delete(){
        localStorage.removeItem(ACESS_TOKEN);
    },
    get(chave : string) : string | null{
        const resp :string | null= localStorage.getItem(chave);
        return resp;
    }


};

export default TokenMethods;