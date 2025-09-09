export default function Exemplo2() {
  return (
    <div>
      <h1>Exemplo 2</h1>
      <div className="conteudo">
        <h3>Calculo</h3>
        <p>
          O obejetivo será receber o nome do aluno,suas 3 notas e calcular a média.</p>
        <form>
          <p>
            Nome do Aluno <br />
            <input type="text" />
          </p>

          <p>
            Nota 1 <br />
            <input type="text" />
          </p>
          <p>
            Nota 2 <br />
            <input type="text" />
          </p>

          <p>
            <input type="button" value="Calcular" />
          </p>
          <a href="/">Voltar</a>
        </form>

      </div>
    </div>
  );
}
