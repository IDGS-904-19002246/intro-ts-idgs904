// TS es JS typado, ayuda a la transpilacion: evita que variables
// tengan mismo nombre y evitar errores en el navegador,
// porque al final se junta todo

// ----------------------------------------------------------------------
var num1 = 23;
let num2= 24;
const num3 = 25;

// La diferencia (LET Y VAR) es el alcance de las variables.

// let permite declarar variables limitando su
// alcance al bloque, declaración, o expresión donde
// se está usando y var define una variable global o 
// local en una función sin importar el ámbito del bloque.


let version:number = 34.4
version = 3.14

let nombre:string = 'juan'
let activo:boolean = true

let matricula:number|string = 19002246
matricula = 'juanito'
//*importa el TS al html* */
console.log(matricula);
//Una variable puede resivir varios tipos de datos

// Reemplaza valores en arreglo
let vector:number [] = [1,4,3]
vector[2]= 8
vector.push(69)
console.log(vector);


for(let v of vector)
    console.log(v)