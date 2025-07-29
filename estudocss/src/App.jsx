import "./App.css";

export default function App() {
    const centralizado = {textAlign: "center"};

    const destaque = {
        textAlign: "center",
        border: "2px solid magenta",
        color: "pink",
        padding: "10px"
    };

    return (
        <div>
            <h1>Estudo CSS</h1>
            <p>
                O CSS (<i>Cacasding Style Sheets</i>) é uma linguagem utilizada para estilizar <b>Página web</b>, e será utilizada dentro ou fora do HTML.
            </p>
            <p>
                Na aula de hoje, vamos estudar e enterder como aplicar estilos CSS em componentes do React.
            </p>

            <ul>
                <li>Definir cor para o texto, para o fundo do elemento</li>
                <li>Posicionamento dos elementos na página</li>
                <li>Espaçamento, bordas, sombras, etc...</li>
                <li>Efeitos visuais e animações.</li>
            </ul>
            <p>
                O HTML diz o que deve aparecer na pagina,enquanto o CSS diz como deve aparecer.
            </p>
            <p className="centro">

                Hello Kitty
            </p>

            <p style={centralizado}>
                <p>
                    <img src="foto.jpg" alt="" />
                </p>

            </p>
            <h3 style={destaque}>Fim da aula</h3>
        </div>
    );
}