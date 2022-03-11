interface Veiculo { //criando uma interface no typescript
    nome: string
    placa: string
    entrada: Date

}


//vamos de inicioa executar uma função anônima
(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query)

    //crud
    function patio() {
        function ler() { }
        function add(veiculo: Veiculo) { }
        function remove() { }
        function save(){}
        function render() { }
            
        return {ler, add, remove, save, render}
        
    }


    $("#cadastrar")?.addEventListener("click", () => {
        //quando clicar em cadastrar vou capturar os inputs
        const nome = $("#nome")?.value
        const placa = $("#placa")?.value

        //verificar se p usuário enviou as informações desejadas
        if (!nome || !placa) {
            alert("Os campos 'Nome' e 'Placa' são obrigatórios")
            return
        }

        patio().add({nome, placa, entrada: new Date()})
    })
})()

//essa ? noeventlistener o vscode colocou pq o elemento pode vir nulo

//sempre que fizer alterações, transpile o código:
//npx -p typescript tsc
