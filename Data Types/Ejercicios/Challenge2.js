/*
Usa el ejemplo del IMC del Desafío #1, y el código que ya escribiste, y mejóralo. Tus tareas: 
    1. Imprime una buena salida en la consola, diciendo quién tiene el IMC más alto. El mensaje es "¡El IMC de Mark es más alto que el de John!" o "¡El IMC de John es más alto que el de Mark!" 
    2. Utilice un literal de plantilla para incluir los valores de IMC en las salidas. 
    Ejemplo: "¡El IMC de Mark (28.3) es más alto que el de John (23.9)!"
*/

// Datos de la prueba
markWeight = 78
markHeight = 1.69
johnWeight = 92
johnHeight = 1.95
let BMI_mark = (markWeight / (markHeight ** 2)).toFixed(1);
let BMI_jhon = (johnHeight / (johnWeight ** 2)).toFixed(5);
// let markHigherBMI = BMI_mark > BMI_jhon;

if (BMI_mark > BMI_jhon) {
    console.log(BMI_mark)
    console.log('El BMI de Mark es mayor que el BMI de Jhon');
} else {
    console.log(BMI_jhon)
    console.log('El BMI de Jhon es nayor que el BMI de Mark');
}