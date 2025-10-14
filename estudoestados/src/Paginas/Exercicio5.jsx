import { useState } from "react";
export default function Exercicio5() {

  const[lado, setNumero1]= useState(0);
  const[resultado, setResultado]= useState(0);
 

  function calcular()
{
  
  let area = lado*lado;

  setResultado("a area do quadrado é " + area );

}
    return (
        <div>
            <h1>Exercicio 5 </h1>
    
      <div className="conteudo">
        <form>
          
          <p>
            Digite o valor do lado: <br />
            <input type="text" value={lado}
            onChange={ (e) => setNumero1(e.target.value)}/>
          </p>

      
          <p>
            <input type="button" value="Exercicio5" 
            onClick={calcular} />
          </p>

          <p>
            <b>Resultado</b> <br />
            o valor do lado é = {lado} <br />
           
             {resultado} <br />
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}
