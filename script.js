let mensage = document.querySelector("#mensageInicial");
let btnAlterar = document.querySelector("#btnAlterar");


btnAlterar.addEventListener("click", ()=>{
    mensage.innerText = `Seja bem vindo ao JavaScript`;
})