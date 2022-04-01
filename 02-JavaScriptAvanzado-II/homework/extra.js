String.prototype.repeatify = function(n) {
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            console.log(this.valueOf());
        }
    } else {
        return "";
    }
}

var nombre = "Gustavo"
nombre.repeatify(5);