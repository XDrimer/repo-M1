'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let array = [1];
    let div = 2;
    while (num !== 1) {
        if (num % div == 0) {
            array.push(div)
            num = num / div
        } else div++
    }
    return array;
}

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let click = true;
    while (click) {
        click = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let aux = array[i]
                array[i] = array[i + 1]
                array[i + 1] = aux;
                click = true;
            }
        }
    }
    return array;
}
//     [1,5,6,10,10]  flag=4
//               i
//            j
function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 1; i < array.length; i++) {
        let aux = array[i];
        let j = i - 1;
        while (j >= 0 && aux < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = aux;
    }
    return array;
}

//[2,5,1,7,9,4]

function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let j = 0; j < array.length; j++) {

        for (let i = 0; i < array.length; i++) {
            let minimo = Infinity;
            let aux = array[j];
            if (array[j] < minimo) {
                minimo = array[j];
            }
        }

    }


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};