import { useState } from "react";
export default function Prova() {

    
    const[lado, setNumero1]= useState(0);
    const[altura, setNumero2]= useState(0);
    const[resultado, setResultado]= useState(0);
   
  
    function calcular()
  {
    
    let area = lado*altura;
    let quantidade = area/2;
    let valor = quantidade*10;
    

   

  
    setResultado("a quantidade é " + quantidade + " A area é " + area + " O valor é " + valor);
  
  }
      return (
          <div>
              <h1>Prova guigui </h1>
      
        <div className="conteudo">
          <form>
            
            <p>
              Digite o valor da largura: <br />
              <input type="text" value={lado}
              onChange={ (e) => setNumero1(e.target.value)}/>
            </p>

            <p>
              Digite o valor da altura: <br />
              <input type="text" value={altura}
              onChange={ (e) => setNumero2(e.target.value)}/>
            </p>
  
        
            <p>
              <input type="button" value="Prova" 
              onClick={calcular} />
            </p>
  
            <p>
              <b>Resultado</b> <br />
              o valor da largura é = {lado} <br />

              o valor da altura é = {altura} <br />

         
               {resultado} <br />
            </p>
            <a href="/">Voltar</a>
          </form>
          </div>
          </div>
      );
  }
  