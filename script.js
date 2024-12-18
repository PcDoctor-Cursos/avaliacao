const inputProduto = document.getElementById("inputProduto");
const inputValor = document.getElementById("inputValor");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");

btnAdicionar.addEventListener("click", Adicionar);

function Adicionar(e) {
  e.preventDefault();

  const nomeProduto = inputProduto.value.trim();
  const valorProduto = inputValor.value.trim();

  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  li.innerHTML = `
        <span>${inputProduto.value} -> R$ ${parseFloat(
    inputValor.value
  ).toFixed(2)}</span>
      `;

  const remover = document.createElement("button");
  remover.textContent = "Remover";
  remover.classList.add("btn", "btn-danger", "btn-sm");
  remover.style.position = "absolute";
  remover.style.right = "1%";
  remover.style.top = "5px";
  li.appendChild(remover);
  lista.appendChild(li);

  lista.style.height = "80%";
  lista.style.width = "50%";

  remover.addEventListener("click", () => {
    lista.removeChild(li);
  });

  inputProduto.value = "";
  inputValor.value = "";
}
