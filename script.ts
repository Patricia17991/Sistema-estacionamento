interface Veiculo { //criando uma interface no typescript
    nome: string
    placa: string
    entrada: Date | string

}//uma interface pode ser concatenada a outra interface

(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query)

    function calculoTime(mil: number) {
        const min = Math.floor(mil / 60000)
        const sec = Math.floor((mil % 60000 / 1000))

        return `${min}min e ${sec}sec`
      }

   
    function patio() {
        function ler(): Veiculo[] {
            return localStorage.patio ? JSON.parse(localStorage.patio) : []
        }//responsável pelo armazenamento no local storage
        
        function save(veiculos: Veiculo[]) { 
            localStorage.setItem("patio", JSON.stringify(veiculos))
        }

        function add(veiculo: Veiculo, salva? : boolean) { 
            const row = document.createElement("tr")

            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
            `

            row.querySelector(".delete")?.addEventListener("click", function (){
                remove(this.dataset.placa)
            })

            $("#patio")?.appendChild(row)

            if(salva) save([...ler(), veiculo])
            // ... significa 'todos os antigos'
        }
        function remove(placa: string) { 
            const { entrada, nome } = ler().find(veiculo => veiculo.placa === placa)
            
            //cálculo de tempo que o veiculo ficou estacionado
            const time = calculoTime(new Date().getTime() - new Date(entrada).getTime())

            if (confirm(`O veículo ${nome} permaneceu por ${time}. Deseja encerrar?`)) return

            save(ler().filter(veiculo => veiculo.placa !== placa))

            render()


        }
        
        function render() {
            $("#patio")!.innerHTML = "" // ! serve para forçar que o innerHTML seja lido desse jeito. só use quando tiver certeza que o objeto existe! cuidado ao usar o force
            const patio = ler()

            if (patio.length) {
                patio.forEach((veiculo) => add(veiculo))
            }
         }
            
        return {ler, add, remove, save, render}
        
    }

    patio().render()//chamando o render

    $("#cadastrar")?.addEventListener("click", () => {
        //quando clicar, capturar os inputs
        const nome = $("#nome")?.value
        const placa = $("#placa")?.value

        //verificar se o usuário enviou as informações desejadas
        if (!nome || !placa) {
            alert("Os campos 'Nome' e 'Placa' são obrigatórios")
            return
        }

        patio().add({nome, placa, entrada: new Date().toISOString()}, true)
    })
})()

// ? no eventlistener o vscode colocou pq o elemento pode vir nulo

//sempre que fizer alterações, transpile o código: npx -p typescript tsc
// o '?' deixa um parâmetro totalmente opcional

