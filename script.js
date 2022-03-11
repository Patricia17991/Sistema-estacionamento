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

(function () {
    var _a;
    var $ = function (query) { return document.querySelector(query); };
    //crud
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        } 
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
          
        }
        function remove() { }
        function render() {
            $("#patio").innerHTML = ""; 
            var patio = ler();
            if (patio.length) {
                patio.forEach(function (veiculo) { return add(veiculo); });
            }
        }
        return { ler: ler, add: add, remove: remove, save: save, render: render };
    }
    patio().render(); 
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a, _b;

        var nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        var placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
      
        if (!nome || !placa) {
            alert("Os campos 'Nome' e 'Placa' são obrigatórios");
            return;
        }
        patio().add({ nome: nome, placa: placa, entrada: new Date() }, true);
    });
})();


