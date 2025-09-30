import { useState } from "react";
export default function Exercicio1() {

  const[numero, setNumero]= useState(0);
  const[resultado, setResultado]= useState();


  function calcular()
{
  let quadrado = Number(numero) * Number(numero);
  let cubo = quadrado * Number(numero);

  setResultado("o quadrado é " + quadrado + ", o cubo é " + cubo);

}
    return (
        <div>
            <h1>Exercicio 1 </h1>
    
      <div className="conteudo">
        <form>
          <p>
            Digite um numero qualquer: <br />
            <input type="text" value={numero}
            onChange={ (e) => setNumero(e.target.value)}/>
          </p>
        
      
          <p>
            <input type="button" value="Exercicio1" 
            onClick={calcular} />
          </p>

          <p>
            <b>Resultado</b> <br />
            o número digitado foi {numero} <br />
            Resultado: {resultado}
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}
