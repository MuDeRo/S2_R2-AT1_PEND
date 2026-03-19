let inputLista = document.querySelector("#inputLista");
let btnAdicionar = document.querySelector("#btnAdicionar");
let btnRemover = document.querySelector("#btnRemover");
let lista = document.querySelector("#listaTarefa");
let message = document.querySelector("#message");

btnAdicionar.addEventListener("click", () => {
    let itemTexto = inputLista.value;

    if (itemTexto === "") {
        message.innerText = "Campo vazio, preencha corretamente";
        message.className = "text-danger fw-bold";
        return;
    }

    let novoItem = document.createElement("li");
    novoItem.className = "list-group-item d-flex justify-content-between";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";

    let texto = document.createElement("span");
    texto.innerText = itemTexto;

    let btnExcluir = document.createElement("button");
    btnExcluir.innerText = "Remover";
    btnExcluir.className = "btn btn-sm btn-danger";

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            texto.classList.add("text-decoration-line-through", "text-muted");
        } else {
            texto.classList.remove("text-decoration-line-through", "text-muted");
        }
    });

    btnExcluir.addEventListener("click", () => {
        if (lista.contains(novoItem)) {
            lista.removeChild(novoItem);
            message.innerText = "Texto excluído com sucesso!";
            message.className = "text-warning fw-bold";
        }
    });

    novoItem.appendChild(checkbox);
    novoItem.appendChild(texto);
    novoItem.appendChild(btnExcluir);

    lista.appendChild(novoItem);

    message.innerText = "Objetivo registrado!";
    message.className = "text-success fw-bold";

    inputLT.value = "";
});

btnRemover.addEventListener("click", () => {
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
        message.innerText = "Último item removido! ";
        message.className = "text-warning fw-bold";
    } else {
        message.innerText = "Nada para remover";
        message.className = "text-danger fw-bold";
    }
});

