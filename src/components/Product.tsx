interface Content {
    name: string,
    price: string,
    description: string,
}

function Products({name, price, description}: Content) {
    return (
        <div>
            <p>{name}</p>
            <div>
                <p>R$ {price}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Products;
