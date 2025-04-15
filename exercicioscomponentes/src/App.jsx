import Exemplo1 from "./Componentes/exemplo1"
export default function App()
{
  return (
    <div>
      <h1>Exercício de Componentes</h1>

      <h3>Chamada para o Exemplo 1</h3>
      <Exemplo1 numero1={8}  numero={2}/>
      <Exemplo1 numero1={10} numero2={22}/>
      <Exemplo1 numero1={7.5} numero2={5.8}/>
      <Exemplo1 numero1={-58} numero={65}/>
      
    </div>
  )
}