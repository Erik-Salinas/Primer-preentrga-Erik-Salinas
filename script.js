
let user = prompt('Ingrese usuario');
let password = prompt('Ingrese contraseña');

while (true) {
    if ((user == 'erik2002') && (password == 'js1234')) {
        alert(`Bienvenido ${user}`)
        break;

    }

    else {
        alert('Usuario o Contraseña incorrecta')
    }

    user = prompt('Ingrese usuario');
    password = prompt('Ingrese contraseña');

}


//Se obtienen los datos

let nota1 = parseInt(prompt('Ingrese nota 1'))
let nota2 = parseInt(prompt('Ingrese nota 2'))
let nota3 = parseInt(prompt('Ingrese nota 3'))
let resultadoFinal = nota1 + nota2 + nota3;


//Se define la función notas
//la cual pide como parametros las 3 notas
while (resultadoFinal != 0) {
    let notas = (primerTrimestre, segundoTrimestre, tercerTrimestre) => {
        //Suma y calcula el promedio
        let resultado = (primerTrimestre + segundoTrimestre + tercerTrimestre);
        return resultado;
    }
    
    alert(`Su nota de cierre es ${notas(nota1, nota2, nota3)} `)
    break;
}