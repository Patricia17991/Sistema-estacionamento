
//vamos de inicioa executar uma função anônima
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calculoTime(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000 / 1000));
        return `${min}min e ${sec}sec`;
    }
    //crud
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        } //responsável pelo armazenamento no local storage
        function save(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        function add(veiculo, salva) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
            `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remove(this.dataset.placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salva)
                save([...ler(), veiculo]);
            // ... significa 'todos os antigos'
        }
        function remove(placa) {
            const { entrada, nome } = ler().find(veiculo => veiculo.placa === placa);
            //cálculo de tempo que o veiculo ficou estacionado
            const time = calculoTime(new Date().getTime() - new Date(entrada).getTime());
            if (confirm(`O veículo ${nome} permaneceu por ${time}. Deseja encerrar?`))
                return;
            save(ler().filter(veiculo => veiculo.placa !== placa));
            render();
        }
        function render() {
            $("#patio").innerHTML = ""; // ! serve para forçar que o innerHTML seja lido desse jeito. só use quando tiver certeza que o objeto existe! cuidado ao usar o force
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => add(veiculo));
            }
        }
        return { ler, add, remove, save, render };
    }
    patio().render(); //chamando o render
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        //quando clicar em cadastrar vou capturar os inputs
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        //verificar se p usuário enviou as informações desejadas
        if (!nome || !placa) {
            alert("Os campos 'Nome' e 'Placa' são obrigatórios");
            return;
        }
        patio().add({ nome, placa, entrada: new Date().toISOString() }, true);
    });
})();
//essa ? noeventlistener o vscode colocou pq o elemento pode vir nulo
//sempre que fizer alterações, transpile o código:
//npx -p typescript tsc
// o '?' deixa um parâmetro totalmente opcional
