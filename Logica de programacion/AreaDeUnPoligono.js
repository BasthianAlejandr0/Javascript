/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

//Definimos la función
function esPoligono() {
    let polígono = prompt("Ingrese el polígono a calcular su área: Triángulo, Cuadrado o Rectángulo")
    let areaCuadrado = (lado) => lado * lado
    let areaTriangulo = (base, altura) => (base * altura) / 2
    let areaRectangulo = (base, altura) => base * altura
    if (polígono === "Triángulo") {
        let base = prompt("Ingrese la base del triángulo")
        let altura = prompt("Ingrese la altura del triángulo")
        console.log(`El área del triángulo es: ${areaTriangulo(base, altura)}`)
    }
    else if (polígono === "Cuadrado") {
        let lado = prompt("Ingrese el lado del cuadrado")
        console.log(`El área del cuadrado es: ${areaCuadrado(lado)}`)
    }
    else if (polígono === "Rectángulo") {
        let base = prompt("Ingrese la base del rectángulo")
        let altura = prompt("Ingrese la altura del rectángulo")
        console.log(`El área del rectángulo es: ${areaRectangulo(base, altura)}`)
    }

}

//Llama a la función
esPoligono();