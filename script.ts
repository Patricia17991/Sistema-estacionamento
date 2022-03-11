//vamos de inicioa executar uma função anônima
(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query)


    $("#cadastrar")?.addEventListener("click", () => {
        //quando clicar em cadastrar vou capturar os inputs
        const nome = $("#nome")?.value
        const placa = $("#placa")?.value

        //verificar se p usuário enviou as informações desejadas
        if (nome || placa) {
            alert("Os campos 'Nome' e 'Placa' são obrigatórios")
        }
    })
})()

//essa ? noeventlistener o vscode colocou pq o elemento pode vir nulo
