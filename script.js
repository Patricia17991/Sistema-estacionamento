"use strict";
//vamos de inicioa executar uma função anônima
(function () {
    var _a;
    var $ = function (query) { return document.querySelector(query); };
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
    });
})();
//essa ? noeventlistener o vscode colocou pq o elemento pode vir nulo
