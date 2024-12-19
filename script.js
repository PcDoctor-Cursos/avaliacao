document.getElementById("form-produto").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtendo os valores dos campos
  const nomeProduto = document.getElementById("nome-produto").value;
  const precoProduto = parseFloat(document.getElementById("preco-produto").value);

  if (nomeProduto && precoProduto) {
      // Criando uma nova linha na tabela
      const tabelaProdutos = document.getElementById("tabela-produtos").getElementsByTagName("tbody")[0];
      const novaLinha = tabelaProdutos.insertRow();

      // Adicionando as células na linha
      const celulaNome = novaLinha.insertCell(0);
      const celulaPreco = novaLinha.insertCell(1);
      const celulaRemover = novaLinha.insertCell(2);

      celulaNome.textContent = nomeProduto;
      celulaPreco.textContent = `R$ ${precoProduto.toFixed(2)}`;

      // Botão de remover
      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "Remover";
      botaoRemover.classList.add("btn", "btn-danger", "btn-sm");
      botaoRemover.onclick = function() {
          tabelaProdutos.deleteRow(novaLinha.rowIndex - 1);
          atualizarTotal();
      };
      celulaRemover.appendChild(botaoRemover);

      // Limpar os campos do formulário
      document.getElementById("nome-produto").value = '';
      document.getElementById("preco-produto").value = '';

      // Atualizar o total
      atualizarTotal();
  }
});

// Função para atualizar o total
function atualizarTotal() {
  const tabelaProdutos = document.getElementById("tabela-produtos").getElementsByTagName("tbody")[0];
  let total = 0;

  // Calculando o total
  for (let i = 0; i < tabelaProdutos.rows.length; i++) {
      const preco = parseFloat(tabelaProdutos.rows[i].cells[1].textContent.replace("R$", "").trim());
      total += preco;
  }

  // Atualizando o valor total na página
  document.getElementById("total").textContent = total.toFixed(2);
}