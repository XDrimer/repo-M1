'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
    this.value = value,
        this.right = null,
        this.left = null
}



BinarySearchTree.prototype.insert = function(value) {
    let Arbol = new BinarySearchTree(value)
    if (value >= this.value) {
        if (!this.right) this.right = Arbol
        else {
            this.right.insert(value)
        }
    } else {
        if (!this.left) this.left = Arbol
        else {
            this.left.insert(value)
        }
    }
}

BinarySearchTree.prototype.contains = function(value) {
    if (this.value == value) return true;
    if (!this.right && !this.left) return false;
    if (!this.right && this.left) return this.left.contains(value)
    if (this.right && !this.left) return this.right.contains(value)
    if (this.right && this.left) return this.left.contains(value) || this.right.contains(value)
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
    if (order == "in-order" || !order) {
        if (this.left) this.left.depthFirstForEach(cb, order)
        cb(this.value)
        if (this.right) this.right.depthFirstForEach(cb, order)
    }
    if (order == "pre-order") {
        cb(this.value)
        if (this.left) this.left.depthFirstForEach(cb, order)
        if (this.right) this.right.depthFirstForEach(cb, order)
    }
    if (order == "post-order") {
        if (this.left) this.left.depthFirstForEach(cb, order)
        if (this.right) this.right.depthFirstForEach(cb, order)
        cb(this.value)
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []) {
    cb(this.value);
    if (this.left) arr.push(this.left);
    if (this.right) arr.push(this.right);
    arr.length && arr.shift().depthFirstForEach(cb, arr)
}

BinarySearchTree.prototype.size = function() {
    if (!this.right && !this.left) return 1
    if (!this.right && this.left) return 1 + this.left.size()
    if (this.right && !this.left) return 1 + this.right.size()
    if (this.right && this.left) return 1 + this.left.size() + this.right.size()
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree
};