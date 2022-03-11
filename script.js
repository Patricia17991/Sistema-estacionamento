"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//vamos de inicioa executar uma função anônima
(function () {
    var _a;
    var $ = function (query) { return document.querySelector(query); };
    //crud
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        } //responsável pelo armazenamento no local storage
        function save(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        function add(veiculo, salva) {
            var _a;
            var row = document.createElement("tr");
            row.innerHTML = "\n            <td>".concat(veiculo.nome, "</td>\n            <td>").concat(veiculo.placa, "</td>\n            <td>").concat(veiculo.entrada, "</td>\n            <td>\n                <button class=\"delete\" data-placa=\"").concat(veiculo.placa, "\">X</button>\n            </td>\n            ");
            (_a = $("#patio")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
            if (salva)
                save(__spreadArray(__spreadArray([], ler(), true), [veiculo], false));
            // ... significa 'todos os antigos'
        }
        function remove() { }
        function render() {
            $("#patio").innerHTML = ""; // ! serve para forçar que o innerHTML seja lido desse jeito. só use quando tiver certeza que o objeto existe! cuidado ao usar o force
            var patio = ler();
            if (patio.length) {
                patio.forEach(function (veiculo) { return add(veiculo); });
            }
        }
        return { ler: ler, add: add, remove: remove, save: save, render: render };
    }
    patio().render(); //chamando o render
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
// o '?' deixa um parâmetro totalmente opcional

