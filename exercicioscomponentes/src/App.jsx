import Exemplo1 from "./Componentes/exemplo1"
import Exercicio1 from "./Componentes/exercicio1"
import Exercicio2 from "./Componentes/exercicio2"

export default function App() {
  return (
    <div>
      <h1>Exercício de Componentes</h1>

      <h3>Chamada para o Exemplo 1</h3>
      <Exemplo1 numero1={8} numero={2} />
      <Exemplo1 numero1={10} numero2={22} />
      <Exemplo1 numero1={7.5} numero2={5.8} />
      <Exemplo1 numero1={-58} numero={65} />

      <h3>Chamada para o Exercicio 1</h3>
      <Exercicio1 fah={100} />
      <Exercicio1 fah={50} />
      <Exercicio1 fah={32} />

      <h3>Chamada para o Exercicio 2</h3>
      <Exercicio2 peso={80} Altura="1.80"/>
      <Exercicio2 peso={60} Altura="1.60" />
      </div>
      
  )
}