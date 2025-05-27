export default function Exercicio1 ({numero}) 
{
    let quadrado = numero * numero;
    let cubo = numero * numero * numero;
    return (
        <div>
            <p>o quadrado do numero {numero} é {quadrado}</p>

            <p> o cubo do numero {numero} é {cubo} </p>
        </div>
    );
}