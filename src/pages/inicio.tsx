import { useEffect } from "react";
import { useRouter } from "next/router";
import { BuscarSessao } from "../Service/AuthenticationService";
import { ParsedUrlQuery } from "querystring";

type IndexProps = {
  mesa: string;
  token: string;
};

type Query = {
  mesa?: string;
  token?: string;
};

export default function Index({ mesa, token }: IndexProps) {
  const router = useRouter();

  useEffect(() => {
    BuscarSessao(token)
      .then(() => router.push('/menu'))
      .catch(() => router.push('/semToken'))
  }, []);

  return <div>Aguardando verificação...</div>;
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
