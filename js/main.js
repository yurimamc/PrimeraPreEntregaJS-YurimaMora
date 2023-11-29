function ingresarNota() {
    return parseFloat(prompt("Ingrese una nota:"));
}

function calcularPromedio() {
    let sumaNotas = 0;
    let cantidadNotas = 3;

    for (let i = 1; i <= cantidadNotas; i++) {
        let nota = ingresarNota();

        if (nota < 0 || nota > 20 || isNaN(nota)) {
            alert("Ingresaste una nota inválida. Por favor, asegúrate de que las notas estén en el rango de 0 a 20.");
            return null;
        }
        sumaNotas += nota;
    }

    return sumaNotas / cantidadNotas;
}

function mostrarResultado(nombre, apellido, promedio) {
    if (promedio !== null) {
        let resultado = promedio.toFixed(2);
        if (promedio >= 10) {
            document.write(`El estudiante ${nombre} ${apellido} ha Aprobado con un promedio de ${resultado}`);
        } else {
            document.write(`El estudiante ${nombre} ${apellido} ha Desaprobado con un promedio de ${resultado}`);
        }
    }
}

let nombre = prompt("Ingrese el nombre del estudiante:");
let apellido = prompt("Ingrese el apellido del estudiante:");

let promedio = calcularPromedio();
mostrarResultado(nombre, apellido, promedio);
