import { useState } from "react";
export default function Exercicio6() {

  const[quantidade, setNumero1]= useState(0);
  const[preco, setNumero2]= useState(0);
  const[resultado, setResultado]= useState();


  function calcular()
{
  
  let subtotal, desconto, valorpagar;

  subtotal= quantidade * preco;
  desconto= subtotal * 10/100;
  valorpagar = subtotal - desconto;

  setResultado(
    <div>
      quantidade = {quantidade}<br />
      preco = {preco}<br />
      subtotal = {subtotal}<br />
      desconto = {desconto}<br />
      valor a pagar = {valorpagar}
    </div>
   );

}
    return (
        <div>
            <h1>Exercicio 6 </h1>
    
      <div className="conteudo">
        <form>
          
          <p>
            Digite a quantidade: <br />
            <input type="text" value={quantidade}
            onChange={ (e) => setNumero1(e.target.value)}/>
          </p>

          <p>
            Digite o preço: <br />
            <input type="text" value={preco}
            onChange={ (e) => setNumero2(e.target.value)}/>
          </p>
        
      
          <p>
            <input type="button" value="Exercicio6" 
            onClick={calcular} />
          </p>

          <p>
            <b>Resultado</b>
           
             {resultado} <br />
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}