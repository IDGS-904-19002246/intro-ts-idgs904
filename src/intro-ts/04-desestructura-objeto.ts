interface Alumnos{
    _matricula: number;
    _nombre: string;
    _edad :number;
    _correo: string;
    _grupo: Grupo;
}
interface Grupo{
    _grupo:string;
    _ano:number;
}

const alumno2:Alumnos={
    _matricula:3.1416,
    _nombre:'juan',
    _edad:27,
    _correo:'JJ@gmail.com.mx',
    _grupo:{
        _grupo:'IDGS904',
        _ano:2019
    }
}
const{_matricula,
    _grupo:xx} = alumno2
const{_grupo} = xx
console.log(`La matricula es ${_matricula}`);
console.log(`El nombre es ${alumno2._nombre}`);
console.log(`El grupo es ${_grupo}`);
console.log(`El año es ${alumno2._grupo._ano}`);

const gps:string[] = ['IDGS901','IDGS902','IDGS903','IDGS904']
console.log(`Grupo 1: ${gps[0]}`);
console.log(`Grupo 1: ${gps[1]}`);

const[a,b] = gps
console.log(`Grupo 1: ${a}`);


