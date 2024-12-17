const InputProduct = document.getElementById("addproduct");
const InputPrice = document.getElementById("addprice");
const List = document.getElementById("list");
const ErrorMsg = document.getElementById("erro");
const AddBtn = document.getElementById("btnadd");

AddBtn.addEventListener("click", addproduct);

function addproduct(e) {
  e.preventDefault();
  const Input1 = InputProduct.value.trim();

  const Input2 = InputPrice.value.trim();

  if (Input1 === "") {
    erro.innerHTML =
      '<span style="color: red" font-size: 8px>Esse campo é obrigatório</span>';
    addEventListener("input", () => {
      erro.innerHTML = "";
    });
    return;
  }
  if (Input2 === "") {
    erro.innerHTML =
      '<span style="color: red" font-size: 8px>Esse campo é obrigatório</span>';
    addEventListener("input", () => {
      erro.innerHTML = "";
    });
    return;
  }
}

const li = document.createElement("li");
li.classList.add(
  "list-group-item",
  "d-flex",
  "justify-content-between",
  "align-items-center"
);

const conteudo1 = document.createElement("span");
conteudo1.textContent = Input1;
const conteudo2 = document.createElement("span");
conteudo2.textContent = Input2;
li.appendChild(conteudo1);

const remover = document.createElement("button");
remover.textContent = "Remover";
remover.classList.add("btn", "btn-danger", "btn-sm");
li.appendChild(remover);
remover.style.backgroundColor("#b1c2e0");

List.appendChild(li);

remover.addEventListener("click", () => {
  List.removeChild(li);
});
