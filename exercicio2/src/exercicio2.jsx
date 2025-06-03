export default function Exercicio2 ({temperatura}) {
    let resultado=(temperatura - 32) * 5/9
    return (
        <div>
            <p>a temperatura em graus celsius é {resultado}C</p>

        </div>

    );

}
