import { useState } from "react";
export default function Exercicio7() {

  const[nota1, setNumero1]= useState(0);
  const[nota2, setNumero2]= useState(0);
  const[nota3, setNumero3]= useState(0);
  const[resultado, setResultado]= useState();


  function calcular()
{
  
  let media =(nota1+nota2+nota3)/3;

  setResultado("a média do aluno é " + media );

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
