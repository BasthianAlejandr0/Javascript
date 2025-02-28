/*
1. Solicite al usuario tres valores numéricos (pueden ser enteros o decimales).
2. Solicite al usuario una operación matemática entre: +, -, *, /, ** (potencia) o % (módulo).
3. Determine automáticamente el tipo de dato de cada número ingresado y muéstralo en la consola.
4. vEjecute la operación seleccionada entre los tres valores siguiendo esta regla:
5. Si la operación es potencia (**), se debe aplicar así: num1 ** (num2 ** num3).
6. Si la operación es módulo (%), se debe aplicar así: num1 % num2 % num3.
7. En cualquier otro caso, la operación se aplicará de izquierda a derecha: ((num1 OP num2) OP num3).
8. nMuestre el resultado final de la operación.
9. Maneje errores como división por cero o ingreso de valores inválidos.
*/

let peticion1 = prompt('Ingrese un valor entero o decimal');
let peticion2 = prompt('Ingrese un valor entero o decimal');
let peticion3 = prompt('Ingrese un valor entero o decimal');
let operacion = prompt('Ingrese una operación matemática entre: +, -, *, /, ** (potencia) o % (módulo)');

let num1 = parseFloat(peticion1) || parseInt(peticion1);
let num2 = parseFloat(peticion2) || parseInt(peticion2);
let num3 = parseFloat(peticion3) || parseInt(peticion3);

//1. mostrar tipo de dato
console.log(`El tipo de dato de num1 es: ${typeof num1}, num2 es: ${typeof num2}, num3 es: ${typeof num3}`);

function operation() {
    switch(operacion){
        case '+':
            console.log(num1 + num2 + num3);
            break;
        case '-':
            console.log(num1 - num2 - num3);
            break;
        case '*':
            console.log(num1 * num2 * num3);
            break;
        case '**':
            if(operacion === '**'){
                console.log(num1 ** (num2 ** num3));
            }
        case '%':
            if(operacion === '%'){
                console.log(num1 % num2 % num3);
            }
        case '/':
            if(num2 === 0 || num3 === 0){
                console.log('No se puede dividir por 0');
            }else{
                console.log(num1 / num2 / num3);
            }
            break;
        default:
            console.log('Operación no valida');
            break;

    }
}

operation();