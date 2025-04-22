export default function Exercicio2 ( {peso,altura} )
{
    let IMC= peso/(altura*altura)

    return (
        <div>
        Uma pessoa com {peso} e {altura} em IMC de 24.69
        </div>
    )
}