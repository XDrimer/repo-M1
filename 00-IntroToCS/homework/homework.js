'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    let x = num.split("").reverse();
    x = x.map((value, index) => {
        return Number(value * (2 ** index));
    })
    return x.reduce((acc, value) => {
        return acc + value;
    }, 0);
}

function DecimalABinario(num) {
    // tu codigo aca
    let x = [];
    let resultado = num;
    while (resultado != 0) {
        x.push(resultado % 2);
        resultado = Math.floor(resultado / 2)
    };
    return x.reverse().join("");
}


module.exports = {
    BinarioADecimal,
    DecimalABinario,
}