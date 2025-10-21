import { useState } from "react";
export default function Simulado() {

  const[km, setNumero1]= useState(0);
  const[dias, setNumero2]= useState(0);
  const[resultado, setResultado]= useState();


  function calcular()
{
  
  let total = (dias * 90) + (km * 0.90);

  setResultado("o preço total a pagar é " + total );

}
    return (
        <div>
            <h1>Locadora de carro FATEC Mococa </h1>
    
      <div className="conteudo">
        <form>
          
          <p>
            KM percorridos: <br />
            <input type="text" value={km}
            onChange={ (e) => setNumero1(e.target.value)}/>
          </p>

          <p>
            Dias alugados: <br />
            <input type="text" value={dias}
            onChange={ (e) => setNumero2(e.target.value)}/>
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
