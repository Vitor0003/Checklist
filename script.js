function selecionar(botao, tipo) {

    const grupo = botao.parentElement;

    const check = grupo.querySelector(".check");
    const x = grupo.querySelector(".x");

    // Verifica se o botão clicado já está ativo
    const jaEstaSelecionado =
        (tipo === "check" && check.classList.contains("ativo-check")) ||
        (tipo === "x" && x.classList.contains("ativo-x"));

    // Limpa os dois botões
    check.classList.remove("ativo-check");
    x.classList.remove("ativo-x");

    // Se já estava ativo, permanece cinza
    if (jaEstaSelecionado) {
        return;
    }

    // Caso contrário, ativa o botão clicado
    if (tipo === "check") {
        check.classList.add("ativo-check");
    } else {
        x.classList.add("ativo-x");
    }
}