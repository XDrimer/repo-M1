'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length <= 1) return array;
    let pivot = Math.floor(Math.random() * array.length - 1)
    let left = []
    let right = []

    for (let i = 0; i < array.length; i++) {
        if (i !== pivot) {
            if (array[i] < array[pivot]) left.push(array[i])
            else right.push(array[i])
        }
    }
    return [].concat(quickSort(left), array[pivot], quickSort(right))
}

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};