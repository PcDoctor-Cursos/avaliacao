const inputTarefa = document.getElementById("inputTarefa");
const btnComprar = document.getElementById("btnComprar");
const lista = document.getElementById("lista");

btnComprar.addEventListener("click", comprar);

function comprar(e) {
  e.preventDefault();
  const texto = inputTarefa.value.trim();

  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const conteudo = document.createElement("span");
  conteudo.textContent = texto;
  li.appendChild(conteudo);

  const remover = document.createElement("button");
  remover.textContent = "Remover";
  remover.classList.add("btn", "btn-danger", "btn-sm");
  concluido.style.position = "abosolute";
  concluido.style.right = "7%";
  concluido.style.top = "5px";
  li.appendChild(remover);

  lista.appendChild(li);

  remover.addEventListener("click", () => {
    lista.removeChild(li);
  });

  inputTarefa.value = "";

  concluido.addEventListener("click", () => {
    conteudo.classList.toggle("completed");
    conteudo.classList.toggle("btn-secondary");
    conteudo.classList.toggle("btn-success");

    li.style.backgroundColor = conteudo.classList.contains("completed")
      ? "#aeebc0"
      : "transparent";
  });
}
