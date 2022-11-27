
let vodka = 1200;
let fernet = 1500;
let gin = 1600;
let gancia = 1000;
let pedido = [];
let total = [];




function tomarPedido() {
    let eleccion = prompt("Elegi lo que queres tomar! Elegi una opción, por ej (1 para vodka) \n1-Vodka $1200 \n 2-Fernet $1500 \n 3-Gin $1600 \n 4-Gancia $1000")
    if (eleccion == 1) {
        total.push(vodka)
        pedido.push("Vodka")
    }
    else if (eleccion == 2) {
        total.push(fernet)
        pedido.push("Fernet")
    }
    else if (eleccion == 3) {
        total.push(gin)
        pedido.push("Gin")
    }
    else if (eleccion == 4) {
        total.push(gancia)
        pedido.push("Gancia")
    }
    else {
        alert("El número que ingresaste no pertenece a ningun producto! Vamos de nuevo!!!")
        tomarPedido();
    }
};

function second() {
    let algoMas = prompt("Queres agregar algo más?\n 1-SI \n2-NO");
    if (algoMas == 1) {
        tomarPedido()
        second();
    } else if (algoMas == 2) {
        alert("Buena eleccion")
    }
    else {
        alert("El número que ingresaste no esta entre las opciones! Vamos de nuevo!!!")
        second();
    };
}
let suma=0;

function confirmar(){
    let confirm = prompt("1-Confirmar compra \n2-Cancelar compra")
    if(confirm == 1){
        
        // for (let i = 0; i < total.length; i++){
        //     sum += total[i];
        // }
        for (let bebida of total){
            suma += bebida;
        }
        alert("Gracias por la compra, el total es $"+ suma)
        console.log("Tu lista de compra es: "+pedido+" y el total es: $"+suma)
    }
    else if (confirm == 2){
        alert("Podes volver cuando quieras!")
    }
    else{
        alert("El número que ingresaste no corresponde a ninguna opción! Vamos de nuevo!!!")
        confirmar();
    }
}


function delivery() {
    let nombre = prompt("¿Como es tu nombre?");
    alert("Hola " + nombre + "! Comencemos con el pedido!");
    tomarPedido();
    second();
    confirmar()
}
delivery();