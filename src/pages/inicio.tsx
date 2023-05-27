import { useEffect } from "react";
import { useRouter } from "next/router";
import { BuscarSessao } from "../Service/AuthenticationService";
import { ParsedUrlQuery } from "querystring";
import { get } from "../Service/CookieService";

type IndexProps = {
  mesa: string;
  token: string;
};

export default function Index({ mesa, token }: IndexProps) {
  const router = useRouter();

  useEffect(() => {
    BuscarSessao(token)
      .then(() =>{
        if(get()) {
          router.push('/menu')
          return
        }
        throw Error('token invalido')

      })
      .catch(() => router.push('/semToken'))
  }, []);

  return <div className="flex justify-center items-center h-screen">
    <p className="text-white-300 text-xl">Aguardando verificação</p>
  </div>;
}

export async function getServerSideProps({ query }: { query: ParsedUrlQuery }): Promise<{ props: IndexProps }> {
  const mesa = query.mesa as string;
  const token = query.token as string;

  return {
    props: {
      mesa,
      token,
    },
  };
}
