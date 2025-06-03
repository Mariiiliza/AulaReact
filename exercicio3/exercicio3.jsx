export default function Exercicio3 ({prestação,taxa,tempo}){
let valorParcela = prestação + (prestação *((taxa * taxa)/100));

return (
    <div>
        <p>o valor da parcela sera de {valorParcela}</p>
        <p>taxa em juros: {taxa}</p>
        <p>tempo em dias: {tempo}</p>
    </div>
);
}

