import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BuscarSessao } from "../Service/AuthenticationService";
import { ParsedUrlQuery } from "querystring";
import { get, save} from "../Service/CookieService";

type IndexProps = {
  cli_id: number;
  token: string;
};

export default function Index({ cli_id, token }: IndexProps) {
  const router = useRouter();
  const [aguardandoVerificacao, setAguardandoVerificacao] = useState(true);
  
  useEffect(() => {
    save('cli_id', cli_id.toString())
    BuscarSessao(token)
      .then(() =>{
        if(get('webToken')) {
          router.push('/menu')
          return
        }
        throw Error('token invalido')

      })
      .catch(() => router.push('/semToken'))
      .finally(()=>setAguardandoVerificacao(false))
  }, []);

  if (aguardandoVerificacao) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white-300 text-xl">Aguardando verificação</p>
      </div>
    );
  }
}

export async function getServerSideProps({ query }: { query: ParsedUrlQuery }): Promise<{ props: IndexProps }> {
  const id = query.id as string;
  const token = query.token as string;


  const cli_id : number = parseInt(id);
  return {
    props: {
      cli_id,
      token,
    },
  };
}
