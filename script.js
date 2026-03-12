let nome = document.querySelector("#nome");
let btnMensage = document.querySelector("#btnMensage");
let mensage = document.querySelector("#mensagem")

btnMensage.addEventListener("click", ()=>{
    mensage.innerText = `Jesus ama o(a) ${nome.value}`
});
  