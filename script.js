let inputTarefa = document.querySelector("#inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let btnRemover = document.querySelector("#btnRemover")
let lista = document.querySelector("#listaTarefas");
let mensagem = document.querySelector("#mensagem");

btnAdicionar.addEventListener("click", () => {

    let itemTexto = inputTarefa.value; // Pega o texto digitado no campo input

    let novoItem = document.createElement("li"); // Cria um novo elemento <li> para a lista

    novoItem.innerText = itemTexto; // Coloca o texto digitado dentro do novo item da lista

    
    if (itemTexto === "") {
        
        
        mensagem.innerText = `Campo vazio! Preencha corretamente`;
        mensagem.className = `text-danger fw-bold`;
    } else {
        
        let mensageFeedback = document.querySelector("#mensagem");
        
        mensageFeedback.innerText = `Item adicionado com sucesso!`
        mensagem.className = `text-success fw-bold`;
        lista.appendChild(novoItem); // Adiciona o novo <li> dentro da <ul>
    }



    inputLista.value = ""; // Limpa o campo input após adicionar o item

});

btnRemover.addEventListener("click", ()=>{
    
    // Verifica se existe algum item na lista
    if (lista.lastElementChild) {

        // Remove o último item da lista (<li>)
        lista.removeChild(lista.lastElementChild);

        mensagem.innerText = `Item excluido com sucesso!`
        mensagem.className = `text-warning fw-bold`

    }

});


