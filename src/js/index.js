const botoes = document.querySelectorAll(".botao");
const planetas = document.querySelectorAll(".planeta");

function desselecionarBotao() {
    botoes.forEach(botao => botao.classList.remove("selecionado"));
}

function desselecionarPlaneta() {
    planetas.forEach(planeta => planeta.classList.remove("selecionado"));
}

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPlaneta();

        botao.classList.add("selecionado");
        planetas[indice].classList.add("selecionado");
    });
});
