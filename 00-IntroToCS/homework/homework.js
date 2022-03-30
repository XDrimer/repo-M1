'use strict'

function BinarioADecimal(num) {
    let x = num.split("").reverse();
    x = x.map((value, index) => {
        return Number(value * (2 ** index));
    })
    return x.reduce((acc, value) => {
        return acc + value;
    }, 0);
}

function DecimalABinario(num) {
    var binario = "";
    while (num) {
        binario = num % 2 + binario;
        num = Math.floor(num / 2);
        return binario;
    }
}


module.exports = {
    BinarioADecimal,
    DecimalABinario,
}