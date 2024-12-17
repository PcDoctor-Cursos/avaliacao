const inputTarefa = document.getElementById("inputTarefa");
const btnCriar = document.getElementById("btnCriar");
const lista = document.getElementById("lista");
const erro = document.getElementById("erro");

btnCriar.addEventListener("click", criar);

function criar(e) {
  e.preventDefault();
  const text = inputTarefa.value.trim();

  if (text === "") {
    erro.innerHTML =
      '<span style="color: red" font-size: 8px>Esse campo é obrigatório</span>';
    addEventListener("input", () => {
      erro.innerHTML = "";
    });
    return;
  }

  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const conteudo = document.createElement("span");
  conteudo.textContent = text;
  li.appendChild(conteudo);

  const concluido = document.createElement("button");
  concluido.textContent = "Concluir";
  concluido.classList.add("btn", "btn-success");
  li.appendChild(concluido);

  const remover = document.createElement("button");
  remover.textContent = "Remover";
  remover.classList.add("btn", "btn-danger", "btn-sm");
  li.appendChild(remover);

  lista.appendChild(li);

  remover.addEventListener("click", () => {
    lista.removeChild(li);
  });

  concluido.addEventListener("click", () => {
    conteudo.classList.toggle("completed");
    concluido.classList.toggle("btn-secondary");
    concluido.classList.toggle("btn-success");
    concluido.textContent = conteudo.classList.contains("completed")
      ? "Concluída"
      : "Concluir";
  });
}