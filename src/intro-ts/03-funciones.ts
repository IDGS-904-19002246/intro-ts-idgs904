function sumar(a,b):void{
    console.log(a+b);
}
const res = sumar(5,5)

function suma2(n1:number,n2:number) :number{
    return n1+n2
}

function multiplicar(n3:number, n4:number, n5:number = 5) :number{
    let tem = n3*n5
    return tem
}
// console.log(multiplicar(3,6));

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function datosMascota(Mascota: Mascotas, x:number):void {
    Mascota.edad = x
    console.log(Mascota)
}
const nuevaMascota:Mascotas={
    nombre:'juanito 7w7',
    edad: 43,
    mostrarEdad():void {
        console.log('la edad es'+this.edad);
    },
}
datosMascota(nuevaMascota,69)

let funcSuma = function (n1:number,n2:number):number{
    return n1+n2
}
// console.log(funcSuma(23,3));

// FUNCIÓN CON PARÁMETROS REST
function funcSuma3(...valores:number[]):number{
    let suma = 0
    for (let x = 0; x < valores.length; x++) {
        suma += valores[x]
    }
    return suma
}
console.log(funcSuma3(23,23,23));





