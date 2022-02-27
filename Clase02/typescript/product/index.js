"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const operacion = (num1, num2, operando) => __awaiter(void 0, void 0, void 0, function* () {
    if (operando === "suma") {
        let cuenta = yield import('./calculo.js');
        let resultado = cuenta.suma(num1, num2);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(resultado);
            }, 1000);
        });
    }
    else if (operando === "resta") {
        let cuenta = yield import('./calculo.js');
        let resultado = cuenta.resta(num1, num2);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(resultado);
            }, 1000);
        });
    }
});
const operaciones = (num1, num2, operando) => __awaiter(void 0, void 0, void 0, function* () {
    let resultado = yield operacion(num1, num2, operando);
    console.log(resultado);
});
operaciones(2, 1, "suma");
operaciones(2, 1, "resta");
