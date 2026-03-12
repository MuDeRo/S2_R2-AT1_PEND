let inputLista = document.querySelector("#itemInput");
let btnAdicionar = document.querySelector("#btnAdicionar");
let lista = document.querySelector("#lista");

btnAdicionar.addEventListener("click", ()=>{

    let itemTexto = inputLista.value; // Pega o texto digitado no campo input

    let novoItem = document.createElement("li"); // Cria um novo elemento <li> para a lista

    novoItem.innerText = itemTexto; // Coloca o texto digitado dentro do novo item da lista

    lista.appendChild(novoItem); // Adiciona o novo <li> dentro da <ul>

    inputLista.value = ""; // Limpa o campo input após adicionar o item

});

