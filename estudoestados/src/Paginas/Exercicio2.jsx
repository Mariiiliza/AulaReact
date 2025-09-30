import { useState } from "react";
export default function Exercicio2() {

  const[fahrenheit, setNumero]= useState(0);
  const[resultado, setResultado]= useState();


  function calcular()
{
  
  let fahrenheit = quadrado * Number(fahrenheit);

  setResultado("o quadrado é " + );

}
    return (
        <div>
            <h1>Exercicio 2 </h1>
    
      <div className="conteudo">
        <form>
          <p>
            Digite a temperatura em graus fahrenheit: <br />
            <input type="text" value={celsius}
            onChange={ (e) => setNumero(e.target.value)}/>
          </p>
        
      
          <p>
            <input type="button" value="Exercicio2" 
            onClick={calcular} />
          </p>

          <p>
            <b>Resultado</b> <br />
            o número digitado foi {celsius} <br />
            Resultado: {resultado}
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}
