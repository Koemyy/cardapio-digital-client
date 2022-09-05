import Section from './Section';

const section = {
    "cardapio": [
        {
            "sectionName": "Lanches",
            "products": [
                {
                    "name": "X-Bacon",
                    "price": "18,00",
                    "description": "Diam in arcu cursus euismod. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt."
                },
                {
                    "name": "X-Shimeji",
                    "price": "22,00",
                    "description": "Turpis massa tincidunt dui ut ornare lectus sit. Sodales neque sodales ut etiam sit. Dolor sit amet consectetur adipiscing elit ut aliquam."
                }
            ]
        },
        {
            "sectionName": "Bebidas",
            "products": [
                {
                    "name": "Lala",
                    "price": "20,00",
                    "description": "Lala"
                },
                {
                    "name": "Lulu",
                    "price": "17,00",
                    "description": "Luuuuuu"
                }
            ]
        }
    ]
};

function Cardapio() {
    return (
        <div>
            {
                section.cardapio.map(cardapio => {
                    return (
                        <Section title={cardapio.sectionName} section={cardapio.products}></Section>
                    )
                })
            }
        </div>
    )
}

export default Cardapio
