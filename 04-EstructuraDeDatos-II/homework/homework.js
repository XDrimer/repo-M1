'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.add = function(value) {
    let node = new Node(value);
    let current = this.head;
    if (!current) {
        this.head = node;
        this.length++;
        return node;
    }

    while (current.next) {
        current = current.next
    }
    current.next = node;
    this.length++;
    return node;
}

LinkedList.prototype.remove = function() {
    let current = this.head;
    if (!current) {
        return null;
    }
    if (!current.next) {
        let x = current.value;
        this.head = null;
        return x;
    }
    let devolver = null;
    while (current.next) {
        if (current.next.next == null) {
            devolver = current.next.value;
            current.next = null;
            break;
        }
        current = current.next
    }
    return devolver;
}

LinkedList.prototype.search = function(valor) {
    let current = this.head;
    if (!current) {
        return null;
    }

    while (current) {
        if (typeof valor === "function") {
            if (valor(current.value)) {
                return current.value
            }
        }
        if (current.value === valor) {
            return current.value
        }
        current = current.next
    }

    return null;
}



// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
    this.bucket = [];
    this.numBuckets = 35;
}

HashTable.prototype.set = function(key, value) {
    if (typeof key != "string") {
        throw new TypeError("Keys must be strings");
    }
    let clave = this.hash(key);
    if (!this.bucket[clave]) {
        this.bucket[clave] = {}
    }
    this.bucket[clave][key] = value;
}

HashTable.prototype.hasKey = function(key) {
    let hash = this.hash(key)
    return this.bucket[hash].hasOwnProperty(key);
}

HashTable.prototype.get = function(key) {
    let hash = this.hash(key);
    return this.bucket[hash][key];
}

HashTable.prototype.hash = function(key) {
    let acc = 0;
    for (let i = 0; i < key.length; i++) {
        acc = acc + key.charCodeAt(i);
    }
    return acc % this.numBuckets;
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Node,
    LinkedList,
    HashTable
};