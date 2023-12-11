interface Produto {
    cli_id:  number
    pro_id: number
    ped_status : string
    ped_quantidade : number
    ped_observacao: string
}

export async function salvarCompra({cli_id, pro_id, ped_status, ped_quantidade, ped_observacao}: Produto) {

const url = 'https://cardapio-digital-api.onrender.com/actions/salvarCompra';
   
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cli_id, pro_id, ped_status, ped_quantidade, ped_observacao
        })
    }).catch((err) => err.message)

}

export async function buscarPedidosByCliente(cli_id : number) {

    const url = 'https://cardapio-digital-api.onrender.com/actions/buscarTodosPedidos';
   
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cli_id
        })
    }).catch((err) => err.message)

    const dadosJson = await response.json();
    return dadosJson;
}


export async function AtualizarStatusPedidosByCliente(cli_id : number , ped_status: string){

    const url = 'https://cardapio-digital-api.onrender.com/actions/atualizarPedidoByCliente';
   
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cli_id : cli_id,
            ped_status: ped_status
        })
    })
    .then((response)=>{
        return response.json();
    })
    .catch((err) => err.message)

    return response;
}

export async function AtualizarStatusPagamentoPedidosByCliente(cli_id : number , ped_status: string){

    const url = 'https://cardapio-digital-api.onrender.com/actions/atualizarStatusPagementoPedido';
   
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cli_id : cli_id,
            ped_status: ped_status
        })
    })
    .then((response)=>{
        return response.json();
    })
    .catch((err) => err.message)

    return response;
}