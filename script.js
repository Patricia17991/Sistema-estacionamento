"use strict";
//vamos de inicioa executar uma função anônima
(function () {
    var _a;
    var $ = function (query) { return document.querySelector(query); };
    //crud
    function patio() {
        function ler() { }
        function add(veiculo) {
            var _a;
            var row = document.createElement("tr");
            row.innerHTML = "\n            <td>".concat(veiculo.nome, "</td>\n            <td>").concat(veiculo.placa, "</td>\n            <td>").concat(veiculo.entrada, "</td>\n            <td>\n                <button class=\"delete\" data-placa=\"").concat(veiculo.placa, "\">X</button>\n            </td>\n            ");
            (_a = $("#patio")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function remove() { }
        function save() { }
        function render() { }
        return { ler: ler, add: add, remove: remove, save: save, render: render };
    }
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a, _b;
        //quando clicar em cadastrar vou capturar os inputs
        var nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        var placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        //verificar se p usuário enviou as informações desejadas
        if (!nome || !placa) {
            alert("Os campos 'Nome' e 'Placa' são obrigatórios");
            return;
        }
        patio().add({ nome: nome, placa: placa, entrada: new Date() });
    });
})();
//essa ? noeventlistener o vscode colocou pq o elemento pode vir nulo
//sempre que fizer alterações, transpile o código:
//npx -p typescript tsc
