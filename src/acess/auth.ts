export async function getWebToken() {

    const webToken = await fetch('http://localhost:3000/cliente/autenticar?cli_nome=234a&cli_token=0a45ada7-c2f2-452f-9445-7df094b4fdfb', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'http://localhost:3000/',
        },
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        });

    return{
        props:{
            webToken,
        }
    }
}
