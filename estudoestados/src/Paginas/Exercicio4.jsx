import { useState } from "react";
export default function Exercicio4() {

  const[base, setNumero1]= useState(0);
  const[altura, setNumero2]= useState(0);
  const[resultado, setResultado]= useState();


  function calcular()
{
  
  let area =(base*altura)/2;

  setResultado("a area do triangulo é " + area );

}
    return (
        <div>
            <h1>Exercicio 4 </h1>
    
      <div className="conteudo">
        <form>
          
          <p>
            Digite a base do triangulo: <br />
            <input type="text" value={base}
            onChange={ (e) => setNumero1(e.target.value)}/>
          </p>

          <p>
            Digite a altura do triangulo: <br />
            <input type="text" value={altura}
            onChange={ (e) => setNumero2(e.target.value)}/>
          </p>
        
      
          <p>
            <input type="button" value="Exercicio4" 
            onClick={calcular} />
          </p>

          <p>
            <b>Resultado</b> <br />
            base é = {base} <br />
            altura é = {altura} <br />
             {resultado} <br />
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}
