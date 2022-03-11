//vamos de inicioa executar uma função anônima
(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);


    $("#cadastrar")?.addEventListener("click", () => {
        //quando clicar em cadastrar
        
    })//pegando o id cadastrar
})()

//essa ? noeventlistener o vscode colocou pq o elemento pode vir nulo
