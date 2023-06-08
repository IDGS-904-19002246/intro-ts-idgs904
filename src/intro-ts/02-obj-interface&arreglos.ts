interface Alumno{
    matricula?: number;//DATO OPCIONAL, se usa el '?' 7w7
    nombre:string;
    email: string;
    edad:number;
}

const alumnos:Alumno={
    matricula : 19002246,
    nombre : 'Mario',
    edad:16,
    email:'mario69@gmail.com'
}

let vector2:Array<number>=[2,3,5]
vector2.push(34)
for(let v of vector2)
    console.log(v)
    