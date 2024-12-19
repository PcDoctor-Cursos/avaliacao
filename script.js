const inputProduto = document.getElementById("inputProduto");
const inputValor = document.getElementById("inputValor");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");
const totalElement = document.getElementById("total");

let total = 0;

btnAdicionar.addEventListener("click", Adicionar);

function Adicionar(e) {
  e.preventDefault();

  const nomeProduto = inputProduto.value.trim();
  const valorProduto = parseFloat(inputValor.value.trim());

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

  total += valorProduto;
  atualizarTotal();

  totalElement.style.marginTop = "20px";
  totalElement.style.backgroundColor = "#D3D3D3";
  totalElement.style.width = "600px";
  totalElement.style.height = "40px";
  totalElement.style.padding = "10px";
  totalElement.style.boxSizing = "border-box";
  totalElement.style.border = "1px solid #ccc";
  totalElement.style.borderRadius = "10px";
  totalElement.style.color = "#000";
  totalElement.style.display = "flex";
  totalElement.style.alignItems = "center";
  totalElement.style.fontWeight = "bold";

  lista.style.height = "80%";
  lista.style.width = "50%";

  remover.addEventListener("click", () => {
    total -= valorProduto;
    atualizarTotal();
    lista.removeChild(li);
  });

  inputProduto.value = "";
  inputValor.value = "";
}

function atualizarTotal() {
  totalElement.innerHTML = `
    <div style="display: grid; grid-template-columns: auto auto; gap: 8px; width: 70%;">
      <span style="font-weight: bold; font-size: 20px">Valor Total:</span>
      <span style="font-weight: bold; font-size: 20px; text-align: center;">R$ ${total.toFixed(
        2
      )}</span>
    </div>
  `;
}
