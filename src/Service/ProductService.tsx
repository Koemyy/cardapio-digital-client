interface Produto {
    cli_id:  number
    pro_id: number
    ped_status : string
    ped_quantidade : number
}

export async function salvarCompra({cli_id, pro_id, ped_status, ped_quantidade}: Produto) {

    const url = 'http://localhost:3000/actions/salvarCompra';
   
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cli_id, pro_id, ped_status, ped_quantidade
        })
    }).catch((err) => err.message)

}