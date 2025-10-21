import { useState } from "react";
export default function Simulado() {

  const[nome, setNumero1]= useState(0);
  const[sexo, setNumero2]= useState(0);
  const[compras, setNumero3]= useState(0);
  const[resultado, setResultado]= useState();


  function calcular()
{
  
    homem = valor * 0.05;
    mulher = valor * 0.20;
  setResultado("o preço total a pagar é " + homem );
  
  setResultado("o preço total a pagar é " + mulher );


}
    return (
        <div>
            <h1>Locadora de carro FATEC Mococa </h1>
    
      <div className="conteudo">
        <form>
          
          <p>
            Nome: <br />
            <input type="text" value={nome}
            onChange={ (e) => setNumero1(e.target.value)}/>
          </p>

          <p>
            Sexo (M/F): <br />
            <input type="text" value={sexo}
            onChange={ (e) => setNumero2(e.target.value)}/>
          </p>
        
          <p>
            Valor das compras (R$): <br />
            <input type="text" value={compras}
            onChange={ (e) => setNumero3(e.target.value)}/>
          </p>
      
          <p>
            <input type="button" value="Simulado" 
            onClick={calcular} />
          </p>

          <p>
            <b>Resultado</b> <br />
            o preço total a pagar é = {resultado} <br />
     <br />
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}
