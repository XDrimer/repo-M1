x = 1; //se define x=1 globalmente
var a = 5; //a = 5
var b = 10; //b = 10
var c = function(a, b, c) {
    var x = 10; //nueva x que vale 10
    console.log(x); //imprime 10
    console.log(a); //imprime a que va a ser 8
    var f = function(a, b, c) {
        b = a; //b vale a que es 8
        console.log(b); //imprime 8
        b = c; //b vale c que es 10
        var x = 5; // nueva x que vale 5
    }
    f(a, b, c);
    console.log(b); //imprime 9 porque la b=c de "f" afecto el argumento, no la b de afuera
}
c(8, 9, 10);
console.log(b); //imprime 10 porque la b del global nadie la modifico
console.log(x); //imrpime 1 porque la linea 1 ya definio que x=1 globalmente

//------------------------------------------------------------------------------------------------------------------------------


console.log(bar); //imprime undefined por el hoisting de bar
console.log(baz); //Error no esta definida y no hay hoisting porque abajo no tiene var
foo(); //imprime "Hola!" porque la funcion esta disponible al inicio por su hoisting
function foo() { console.log('Hola!'); }
var bar = 1; //Ahora pasa de ser undefined a 1
baz = 2; //Ahora la define pero no tiene hoisting por no tener var

//----------------------------------------------------------------------------------------------------------------------

var instructor = "Tony";
if (true) {
    var instructor = "Franco";
}
console.log(instructor); //En este caso desde el if modifica la variable anterior porque no es una funcion no tiene scope propio

//---------------------------------------------------------------------------------------------------------------------

var instructor = "Tony";
console.log(instructor); //imprime Tony
(function() {
    if (true) {
        var instructor = "Franco";
        console.log(instructor); //imprime Franco
    }
})();
console.log(instructor); //imprime Tony

//--------------------------------------------------------------------------------------------------------------------

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //imprime the flash
    console.log(pm); //imprime Reverse flash
}
console.log(instructor); //imprime the flash
console.log(pm); //imprime Franco

//-------------------------------------------------------------------------------------------------------------------

6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
    "4" - 2 //2
    "4px" - 2 //NaN
7 / 0 //infinito
    {}[0] //undefined
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
    [3] + [3] - [10] // suma 3+3 como strings y despues les resta 10 quedando 23?
3 > 2 > 1 //false
    //[] == ![]                  //true

//------------------------------------------------------------------------------------------------------------------

function test() {
    console.log(a); //imprime undefined
    console.log(foo()); //imprime 2

    var a = 1;

    function foo() {
        return 2;
    }
}

test();

//----------------------------------------------------------------------------------------------------------------

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //nada porque food es false y el if no se ejecuta

//----------------------------------------------------------------------------------------------------------------

var fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa

var test = obj.prop.getFullname; //-> guarda SOLO la funcion en la variable      

console.log(test()); //ejecuta esa funcion con los () y como el this se ejecuta en el contexto global
// el this.fullname se refiere a el fullname global "Juan perez"

//-----------------------------------------------------------------------------------------------------------------
//orden
function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 2000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

printing();

//1 4 3 2  el 1 va por orden, luego va el 4 porque los otros timeout ya los retrasan, luego va el 3 porque su time
//out es de 0 segundos y finalmente el 2 porque si timeout es de 2 segundos