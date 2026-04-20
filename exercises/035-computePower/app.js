"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computePower(num, exponent) {
    // your code here
    let numElevado = 1;
    for (let i = 0; i < exponent; i++) {
        numElevado = numElevado * num;
    }
    return numElevado;
}
